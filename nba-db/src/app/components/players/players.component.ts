import { Component, OnInit } from '@angular/core';
import { ApiResponse, Player } from 'src/app/models';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {
  searchItem:string = '';
  players!: Array<Player>;

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.http.callPlayers().subscribe((response: ApiResponse<Player>) => {
      this.players = response.data;
    })
  }
}
