import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListItem, List } from '../../app/classes/index';
import { DesiresService } from '../../app/services/desires.service';
import { DetailComponent } from '../detail/detail.component';

@Component({
  selector: 'app-done',
  templateUrl: 'done.component.html',
})
export class DoneComponent implements OnInit {
  constructor(private desireListService:DesiresService,
              private navController:NavController) {  }

  ngOnInit() {}

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
