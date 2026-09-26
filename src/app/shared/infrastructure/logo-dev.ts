import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';

@Injectable({ providedIn: 'root' })
export class LogoServiceApi {
  baseUrl = environment.logoNameApiBaseUrl;
  apiKey = environment.logoNamePublishabledKey;

  getUrlToLogo(source: string): string {
    return `${this.baseUrl}${source}?token=${this.apiKey}`;
  }
}
