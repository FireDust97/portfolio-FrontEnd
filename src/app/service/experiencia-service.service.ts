import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaServiceService {
  URL: 'http://localhost:8080/explab/';
  //URL: 'https://backend-portfolioargprog.onrender.com/explab/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>('http://localhost:8080/explab/lista');
  }

  public detail(id: number): Observable<Experiencia>{
    return this.httpClient.get<Experiencia>('http://localhost:8080/explab/' + `detail/${id}`)
  }

  public save(experiencia: Experiencia): Observable<any>{
    return this.httpClient.post<any>('http://localhost:8080/explab/create', experiencia);
  }

  public update(id: number, experiencia: Experiencia): Observable<any>{
    return this.httpClient.put<any>('http://localhost:8080/explab/' + `update/${id}`, experiencia);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>('http://localhost:8080/explab/' + `delete/${id}`);
  }
}
