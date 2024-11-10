import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThingSpeakService {
  constructor(private http: HttpClient) {}

  // Update fill level for a specific bin
  updateFillLevel(channelId: string, writeApiKey: string, fillLevel: number): Observable<any> {
    const url = `https://api.thingspeak.com/update`;
    const params = new HttpParams()
      .set('api_key', writeApiKey)
      .set('field1', fillLevel.toString());

    return this.http.get(url, { params });
  }
}
