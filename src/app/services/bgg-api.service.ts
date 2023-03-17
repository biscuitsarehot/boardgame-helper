import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BggApiConstants } from '../constants/bgg-api.constants';

@Injectable({
  providedIn: 'root'
})
export class BggApiService {

  constructor(private http: HttpClient) { }

  getUserCollection(user: string): any {
    const params = {
      params:{username: user}
    }
    return this.http.get(BggApiConstants.BGG_BASE_URL + BggApiConstants.BGG_URL_COLLECTION, params);
  }
}
