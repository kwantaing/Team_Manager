import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private _httpService: HttpService) { }
  roster: any;

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
  onDelete(id){
    let Observable = this._httpService.removePlayer(id);
    Observable.subscribe(data => {
      console.log("Deleted: ",data);
      this.getRoster();
    })
  }

}
