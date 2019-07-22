import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }
  newPlayer={name: "", position: ""};

  ngOnInit() {
    this.newPlayer = {name: "", position: ""}
  }

  onCreate(newPlayer){
    console.log("NewPlayer: ",newPlayer);
    let Observable = this._httpService.addPlayer(newPlayer);
    Observable.subscribe(data => {
      console.log("Data from onCreate:",data);
      this._router.navigate(['/players/list'])
    })
  }
}
