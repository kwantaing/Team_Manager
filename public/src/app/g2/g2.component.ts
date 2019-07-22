import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-g2',
  templateUrl: './g2.component.html',
  styleUrls: ['./g2.component.css']
})
export class G2Component implements OnInit {

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }
  roster: any;
  game = "2";

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
    console.log("in to playing")
    let Observable = this._httpService.changeStatus(id,this.game,{status:"playing"});
    Observable.subscribe(data => {
      console.log("Data:",data);
      this.getRoster();
    })
  }
  notPlaying(id){
    console.log("in to notplaying")
    let Observable = this._httpService.changeStatus(id,this.game,{status:"not_playing"});
    Observable.subscribe(data => {
      console.log("Data:",data);
      this.getRoster();
    })
  }
  toUndecided(id){
    console.log("in to undecided")
    let Observable = this._httpService.changeStatus(id,this.game,{status:"undecided"});
    Observable.subscribe(data => {
      console.log("Data:",data);
      this.getRoster();
    })
  }

}
