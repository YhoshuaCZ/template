/**
 * @summary Development environment configuration for the application.
 * This file contains settings and variables specific to the development environment.
 */
export const environment = {
  production: true,
  // TODO(guia): Parte la URL del enunciado en 3:  https://dummyjson.com | /products/search | ?q=phone&limit=12
  // TODO(guia): BaseUrl = dominio (+ versión si la URL la tiene, ej: https://api.inaturalist.org/v1). Sin '/' al final.
  nameApiBaseUrl: 'https://name.api/vx',
  // TODO(guia): EndpointPath = lo que va después del dominio y antes del '?'. Empieza con '/'.
  bccoreNameBccoreEndpointPath: '/endpoint',
  // TODO(guia): Valor fijo de los query params (limit, per_page...). Si la API no lo usa, bórralo aquí y en la Api.
  bccoreNamePageSize: 12,
  // TODO(guia): Si la API pide key, agrega: bccoreNameApiKey: 'TU_KEY', y úsala en los params de la Api.
  logoNameApiBaseUrl: 'http://img.logo.dev/',
  logoNamePublishabledKey: "YOUR_LOGO_PROVIDER_PUBLISHABLED_KEY"
};
