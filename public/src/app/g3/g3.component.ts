import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-g3',
  templateUrl: './g3.component.html',
  styleUrls: ['./g3.component.css']
})
export class G3Component implements OnInit {

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }
  roster: any;
  game = "3"

  ngOnInit() {
    this.getRoster();
  }

  getRoster(){
    let Observable = this._httpService.getPlayers();
    Observable.subscribe(data => {
      console.log("Data:",data);
      this.roster = data["Players"];
    })

  }

  toPlaying(id){
    let Observable = this._httpService.changeStatus(id,this.game,{status:"playing"});
    Observable.subscribe(data => {
      console.log("toPlaying:",data);
      this.getRoster();
    })
  }
  notPlaying(id){
    let Observable = this._httpService.changeStatus(id,this.game,{status:"not_playing"});
    Observable.subscribe(data => {
      console.log("to not playing:",data);
      this.getRoster();
    })
  }
  toUndecided(id){
    let Observable = this._httpService.changeStatus(id,this.game,{status:"undecided"});
    Observable.subscribe(data => {
      console.log("toUndecided:",data);
      this.getRoster();
    })
  }
}
