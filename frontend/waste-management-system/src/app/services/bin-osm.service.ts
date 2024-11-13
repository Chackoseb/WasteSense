import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bin } from '../models/bin';

@Injectable({
  providedIn: 'root'
})
export class BinOsmService {

  private apiUrl = 'http://localhost:8888/bins';

  constructor(private http: HttpClient) {}

  getBins(): Observable<Bin[]> {
    return this.http.get<Bin[]>(this.apiUrl);
  }
}
