import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { About, Skill } from '../models/Models';
import { response } from 'express';

@Injectable({
  providedIn: 'root',
})
export class AboutService {
  private apiUrl = 'assets/data/about.json';
  about!: About;
  aboutSubject = new BehaviorSubject<About>({
    firstName: '',
    lastName: '',
    birthDay: '',
    ambition: '',
    summary: '',
    profession: '',
    cellphone: '',
    email: '',
    address: '',
  });

  constructor(private http: HttpClient) {}

  getSkills(): Observable<Skill[]> {
    return this.http
      .get<{ skills: Skill[] }>(this.apiUrl)
      .pipe(map((response) => response.skills));
  }
  setUserAbout(): void {
    this.http
      .get<{ About: About }>(this.apiUrl)
      .pipe(map((response) => response.About))
      .subscribe((resp: About) => {
        this.aboutSubject.next(resp);
      });
  }
  getUserAbout(): Observable<About> {
    this.setUserAbout()
    return this.aboutSubject;
  }
}
