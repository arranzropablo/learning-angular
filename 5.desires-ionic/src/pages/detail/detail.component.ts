import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { List, ListItem } from '../../app/classes/index';
import { DesiresService } from '../../app/services/desires.service';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'app-detail',
  templateUrl: 'detail.component.html',
})
export class DetailComponent implements OnInit {

  i:number;
  list:List;

  constructor( public navController:NavController,
               public navParams:NavParams,
               public desiresService:DesiresService,
               public alertCtrl: AlertController) {
    this.list = this.navParams.get("list");
    this.i = this.navParams.get("i");
  }

  ngOnInit() {}

  update(item:ListItem){
    item.completed = !item.completed;

    let evrythCompleted:boolean = true;
    for(let item of this.list.items){
      if(!item.completed){
        evrythCompleted=false;
        break;
      }
    }
    this.list.completed = evrythCompleted;

    this.desiresService.saveLists();
  }

  deleteList() {
      let confirm = this.alertCtrl.create({
        title: this.list.name,
        message: 'Do you want to delete this list?',
        buttons: [
          {
            text: 'Yes',
            handler: () => {
              this.desiresService.removeList(this.i);
              this.navController.pop();
            }
          },'No'
        ]
      });
      confirm.present();
    }

}
