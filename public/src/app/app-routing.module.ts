import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { StatusComponent } from './status/status.component';
import { ManageComponent } from './manage/manage.component';
import { G1Component } from './g1/g1.component';
import { G2Component } from './g2/g2.component';
import { G3Component } from './g3/g3.component';


const routes: Routes = [
  {path: "players",component: ManageComponent, children:[
    {path: "list", component: ListComponent},
    {path: "addplayer", component: AddComponent},
  ]},
  {path: "status", component: StatusComponent, children:[
    {path: "game/1", component: G1Component},
    {path: "game/2", component: G2Component},
    {path: "game/3", component: G3Component}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
