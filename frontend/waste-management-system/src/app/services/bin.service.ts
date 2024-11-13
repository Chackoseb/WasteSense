import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bin } from '../models/bin';

@Injectable({
  providedIn: 'root'
})
export class BinService {
  private baseUrl = 'http://localhost:8888/bins';
  

  constructor(private http: HttpClient) { }

  getAllBins(): Observable<Bin[]>{
    return this.http.get<Bin[]>(`${this.baseUrl}`);
  }

  getBinById(id: string): Observable<Bin>{
    return this.http.get<Bin>(`${this.baseUrl}/${id}`)
  }

  createBin(bin: Bin): Observable<Bin>{
    return this.http.post<Bin>(`${this.baseUrl}`, bin)
  }

  updateBin(id: string, bin: Bin): Observable<Bin>{
    return this.http.put<Bin>(`${this.baseUrl}/${id}`, bin)
  }

  deleteBin(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`)
  }

  getBinsRequiringImmediateAction(threshold: number): Observable<Bin[]>{
    const params = new HttpParams().set('threshold', threshold.toString())
    return this.http.get<Bin[]>(`${this.baseUrl}/immediate-action`, {params})
  }

  updateBinFillLevel(binId: string, fillLevel: number): Observable<Bin> {
    const params = new HttpParams().set('fillLevel', fillLevel.toString());
    return this.http.put<Bin>(`${this.baseUrl}/update-fill-level/${binId}`, {}, { params });
  }
}
