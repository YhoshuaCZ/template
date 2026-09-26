// TODO(guia): RENOMBRA este archivo como <subdominio>-api.ts o <recurso-plural>-api.ts (ej: products-api.ts) y la clase (ProductsApi).
// TODO(guia): Esta clase casi NO cambia entre APIs: solo la URL, los params y los nombres de tipos.
import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Entity} from '../domain/model/bccore.entity'; // TODO(guia): tu entity
import {NameResponse} from './name-response'; // TODO(guia): tu Response
import {EntityAssembler} from './entity-assembler'; // TODO(guia): tu Assembler

/**
 * Infrastructure gateway to the external provider API.
 *
 * @remarks
 * Builds requests from environment settings, performs HTTP calls with HttpClient and delegates
 * response mapping to the assembler, so upper layers only receive domain entities.
 *
 * @author Your Name
 */
@Injectable({providedIn: 'root'})
export class BccoreApi {
  // TODO(guia): Estas claves deben existir en environment.ts Y environment.development.ts (con los mismos nombres).
  private baseUrl = environment.nameApiBaseUrl;
  private endpoint = environment.bccoreNameBccoreEndpointPath;
  private pageSize = environment.bccoreNamePageSize;
  private http = inject(HttpClient);
  private assembler = inject(EntityAssembler);

  /**
   * Retrieves the entities matching a search term.
   *
   * @param term - Value sent to the provider to filter results (for example, the selected category).
   * @returns An observable emitting the domain entities.
   */
  getEntitiesByTerm(term: string): Observable<Entity[]> { // TODO(guia): renombra (getProductsByCategory, getObservationsByCategory...)
    // TODO(guia): Mira la URL del enunciado y elige UN caso:
    //
    //   CASO A - filtro después del "?"   https://dummyjson.com/products/search?q=phone&limit=12
    //     params: { q: term, limit: this.pageSize }       <- los nombres (q, limit, per_page, query...) son los de la URL
    //
    //   CASO B - filtro dentro de la ruta  https://dummyjson.com/products/category/laptops
    //     this.http.get<NameResponse>(`${this.baseUrl}${this.endpoint}/${term}`)   <- sin params
    //
    //   CASO C - la API pide key          https://newsapi.org/v2/top-headlines?sources=bbc&apiKey=XXX
    //     params: { sources: term, apiKey: environment.xxxApiKey }   <- la key va en el environment
    //
    //   CASO D - la API devuelve un array directo [ {...} ]
    //     this.http.get<EntityResource[]>(...)  y en el map: this.assembler.toEntitiesFromResponse(resources)
    //     (cambiando también la firma en el Assembler, ver su TODO)
    return this.http.get<NameResponse>(`${this.baseUrl}${this.endpoint}`, {
      params: {q: term, limit: this.pageSize}
    }).pipe(
      map(response => this.assembler.toEntitiesFromResponse(response))
    );
  }

  // TODO(guia): SOLO si el enunciado pide "detalle" por id (ej: https://dummyjson.com/products/1). Si no, bórralo.
  //   El endpoint de detalle devuelve UN resource (sin lista), por eso usa toEntityFromResource.
  //   Importa EntityResource desde './name-response' si lo usas.
  // /**
  //  * Retrieves a single entity by its identifier.
  //  *
  //  * @param id - Provider identifier of the entity.
  //  * @returns An observable emitting the domain entity.
  //  */
  // getEntityById(id: number): Observable<Entity> {
  //   return this.http.get<EntityResource>(`${this.baseUrl}${this.endpoint}/${id}`).pipe(
  //     map(resource => this.assembler.toEntityFromResource(resource))
  //   );
  // }
}
