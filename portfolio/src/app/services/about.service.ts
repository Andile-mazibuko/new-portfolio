import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { About, Skill } from '../models/Models';
import { response } from 'express';

@Injectable({
  providedIn: 'root',
})
export class AboutService {
  private apiUrl = 'assets/data/about.json';
  constructor(private http: HttpClient) {}

  getSkills(): Observable<Skill[]> {
    return this.http
      .get<{ skills: Skill[] }>(this.apiUrl)
      .pipe(map((response) => response.skills));
  }
  getUserAbout(): Observable<About> {
    return this.http
      .get<{ About: About }>(this.apiUrl)
      .pipe(map((response) => response.About));
  }
}
