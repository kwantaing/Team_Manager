import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getPlayer(id){
    console.log("In service:", id);
    return this._http.get('/players/:id')
  }
  getPlayers(){
    return this._http.get('/players')
  }
  
  addPlayer(newPlayer){
    console.log("In service:", newPlayer);
    return this._http.post('/players/new',newPlayer);
  }

  removePlayer(id){
    console.log("In service:",id);
    return this._http.delete(`/players/remove/${id}`);
  }

  changeStatus(id,game_id, status){
    console.log("service");
    console.log("status",status)
    return this._http.post(`/game/${game_id}/${id}/`,status);
  }

}

