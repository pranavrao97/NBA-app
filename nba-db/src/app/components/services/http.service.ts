import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { ApiResponse, Player, Team } from 'src/app/models';
import { Cacheable } from 'angular-cacheable';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  @Cacheable({ttl: 5000})
  callPlayers(): Observable<ApiResponse<Player>> {
    return this.http.get<ApiResponse<Player>>(`${env.BASE_URL}/players`);
  }

  @Cacheable({ttl: 5000})
  callTeams(): Observable<ApiResponse<Team>> {
    return this.http.get<ApiResponse<Team>>(`${env.BASE_URL}/teams`);
  }
}
