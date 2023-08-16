import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PlantData } from '../repository/types/plant-data';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:8080'
  private data!: PlantData;

  constructor(private http: HttpClient) {}

  fetchData(): Observable<any> {
   return this.http.get<PlantData>(`${this.apiUrl}/plants`);
  }
}
