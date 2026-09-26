// TODO(guia): RENOMBRA este archivo como <entidad>-assembler.ts (ej: product-assembler.ts) y la clase como ProductAssembler.
// TODO(guia): El Assembler TRADUCE: nombres del JSON (Resource) -> nombres limpios en camelCase de tu Entity (domain).
import {Injectable} from '@angular/core';
import {Entity} from '../domain/model/bccore.entity'; // TODO(guia): cambia al import de tu entity (ej: '../domain/model/product.entity')
import {EntityResource, NameResponse} from './name-response'; // TODO(guia): cambia a tus nombres (ej: ProductResource, ProductsResponse)

/**
 * Maps provider resources into Entity domain entities.
 *
 * @remarks
 * Translates provider attribute names into domain attribute names and applies fallbacks for
 * missing values, so provider naming conventions never leak into the domain model.
 *
 * @author Your Name
 */
@Injectable({providedIn: 'root'})
export class EntityAssembler {
  /**
   * Converts a provider resource into an Entity.
   *
   * @param resource - Raw object returned by the provider.
   * @returns The corresponding domain entity.
   */
  toEntityFromResource(resource: EntityResource): Entity {
    let entity = new Entity();
    // TODO(guia): Una línea por cada atributo de tu Entity:  entity.<nombreEntity> = <valor del resource>;
    //   Mismo nombre                    -> entity.title = resource.title;
    //   Nombre distinto / snake_case    -> entity.id = resource.mal_id;           entity.commonName = resource.species_guess;
    //   Puede venir null (texto)        -> entity.type = resource.type || '';
    //   Puede venir null (número)       -> entity.score = resource.score ?? 0;
    //   Objeto anidado                  -> entity.author = resource.user?.login ?? '';
    //   Primer elemento de un array     -> entity.image = resource.photos[0]?.url ?? '';      (o resource.images[0] ?? '')
    //   Array de textos a un texto      -> entity.tags = resource.tags.join(', ');
    //   URL armada (detalle, logo)      -> entity.detailUrl = `${environment.xxxDetailsBaseUrl}/${resource.id}`;
    //   Value object Url del shared     -> entity.image = new Url(resource.image_url || '');   (si tu entity usa Url)
    entity.id = resource.mal_id;
    entity.title = resource.title;
    entity.type = resource.type || '';
    entity.episodes = resource.episodes ?? 0;
    entity.image = resource.images?.jpg?.image_url ?? '';
    entity.status = resource.status;
    entity.score = resource.score ?? 0;
    return entity;
  }

  /**
   * Converts a provider response into a list of Entity objects.
   *
   * @param response - Raw response returned by the provider.
   * @returns The entities contained in the response.
   */
  toEntitiesFromResponse(response: NameResponse): Entity[] {
    // TODO(guia): Cambia "data" por la propiedad de la lista que pusiste en el Response:
    //   response.products.map(...)   response.results.map(...)   response.data.items.map(...)
    // TODO(guia): Si la API devuelve un array directo, cambia la firma a (resources: EntityResource[]) y usa resources.map(...).
    return response.data.map(resource => this.toEntityFromResource(resource));
  }
}
