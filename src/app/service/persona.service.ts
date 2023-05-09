import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL: 'http://localhost:8080/personas/';
  //URL: 'https://backend-portfolioargprog.onrender.com/personas/';

  constructor(private httpClient: HttpClient) { }
  
  public lista(): Observable<persona[]>{
    return this.httpClient.get<persona[]>('http://localhost:8080/personas/lista');
  }

  public detail(id: number): Observable<persona>{
    return this.httpClient.get<persona>('http://localhost:8080/personas/' + `detail/${id}`);
  }

  // public save(educacion: Educacion): Observable<any>{
  //   return this.httpClient.post<any>(this.URL + 'create', educacion);
  // }

  public update(id: number, Persona: persona): Observable<any>{
    return this.httpClient.put<any>('http://localhost:8080/personas/' + `update/${id}`, Persona);
  }

  // public delete(id: number): Observable<any>{
  //   return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  // }
}