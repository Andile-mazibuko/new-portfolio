import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../models/Models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private apiUrl = 'assets/data/projects.json';
  constructor(private http: HttpClient) {}

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.apiUrl);
  }
}
