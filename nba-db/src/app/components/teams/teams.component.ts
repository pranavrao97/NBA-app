import { Component, OnInit } from '@angular/core';
import { ApiResponse, Team } from 'src/app/models';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {
  searchItem:string = '';
  teams!: Array<Team>;

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.http.callTeams().subscribe((response: ApiResponse<Team>) => {
      this.teams = response.data;
    });
  }
}
