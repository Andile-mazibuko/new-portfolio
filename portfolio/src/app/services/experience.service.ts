import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from '../models/Models';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  private apiUrl = 'assets/data/experience.json';

  constructor(private http: HttpClient) {}

  getExpiriences(): Observable<Experience> {
    return this.http.get<Experience>(this.apiUrl);
  }
}
