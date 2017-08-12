import { Component, OnInit } from '@angular/core';
import { DesiresService } from '../../app/services/desires.service';

import { NavController } from 'ionic-angular';
import { AddComponent } from '../add/add.component';
import { DetailComponent } from '../detail/detail.component';
import { ListItem, List } from '../../app/classes/index';

@Component({
  selector: 'app-pending',
  templateUrl: 'pending.component.html',
})
export class PendingComponent implements OnInit {
  constructor(private desireListService:DesiresService,
              private navController:NavController) {  }

  ngOnInit() {

  }

  gotoAdd(){
    this.navController.push(AddComponent);
  }

  gotoDetails(list, i){
    this.navController.push(DetailComponent, {list, i});
  }

  update(item:ListItem, list:List){
    item.completed = !item.completed;

    let evrythCompleted:boolean = true;
    for(let item of list.items){
      if(!item.completed){
        evrythCompleted=false;
        break;
      }
    }
    list.completed = evrythCompleted;

    this.desireListService.saveLists();
  }

}
