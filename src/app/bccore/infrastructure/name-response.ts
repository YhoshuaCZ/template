// TODO(guia): RENOMBRA este archivo como <recurso-plural>-response.ts (ej: products-response.ts, observations-response.ts).
// TODO(guia): Este archivo es una COPIA del JSON que devuelve la API. Abre la URL del enunciado en el navegador y cópialo.
// TODO(guia): Si la API devuelve DIRECTAMENTE un array [ {...}, {...} ], BORRA la interfaz NameResponse y deja solo EntityResource.

/**
 * Raw response contract for the provider endpoint.
 *
 * @remarks
 * Mirrors the root JSON object returned by the provider. Property names are kept exactly as
 * the provider sends them, since mapping to domain names is the responsibility of the assembler.
 *
 * @author Your Name
 */
export interface NameResponse { // TODO(guia): RENOMBRA -> ProductsResponse, ObservationsResponse, CharactersResponse...
  // TODO(guia): Pon aquí la propiedad del JSON que contiene la LISTA, con su nombre EXACTO:
  //   { "products": [...] }        -> products: EntityResource[];
  //   { "results": [...] }         -> results: EntityResource[];
  //   { "data": [...] }            -> data: EntityResource[];
  //   { "data": { "items": [...] }} -> data: { items: EntityResource[] };
  /** Collection of raw resources returned by the provider. */
  data: EntityResource[];

  // TODO(guia): Opcional. Otros campos de la raíz que veas en el JSON (total, page, limit, pagination...). Si no los usas, bórralos.
  /** Pagination metadata reported by the provider. */
  pagination: { has_next_page: boolean };
}

/**
 * Raw resource returned by the provider for a single element.
 *
 * @remarks
 * Declares only the fields used by the application, using the provider naming exactly as received.
 *
 * @author Your Name
 */
export interface EntityResource { // TODO(guia): RENOMBRA -> ProductResource, ObservationResource...
  // TODO(guia): Copia de UN elemento de la lista SOLO los campos que pide la card del enunciado.
  //   Nombre EXACTO del JSON, aunque sea snake_case o raro     -> species_guess: string;
  //   Texto / número / booleano                                -> title: string; price: number; active: boolean;
  //   Campo que a veces viene null                             -> description: string | null;
  //   Objeto dentro del elemento   "user": { "login": "ana" }  -> user: { login: string };
  //   Array de textos              "tags": ["a", "b"]          -> tags: string[];
  //   Array de objetos             "photos": [{ "url": "..." }] -> photos: { url: string }[];
  // TODO(guia): Los campos de abajo son de EJEMPLO (API de anime tipo Jikan). Reemplázalos por los de tu API.
  /** Provider identifier. */
  mal_id: number;
  /** Main title. */
  title: string;
  /** Media type, if present. */
  type: string | null;
  /** Number of episodes, if present. */
  episodes: number | null;
  /** Nested image object as sent by the provider. */
  images: { jpg: { image_url: string } };
  /** Airing status. */
  status: string;
  /** Score, if present. */
  score: number | null;
}
