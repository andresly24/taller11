import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecursosService {
  constructor(private http: HttpClient) { }
  datos() {
    return this.http.get('https://picsum.photos/v2/list')
    
  }
}

