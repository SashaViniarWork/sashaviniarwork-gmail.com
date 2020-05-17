import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EventdetailComponent } from '../eventdetail/eventdetail.component';
import { Gevent } from '../shared/gevent';

export interface DialogData {
  id: number;
  name: string;
  address: string;
  type: string;
  paid: boolean;
  maxPlayers: number;
  events: Gevent[];
}

@Component({
  selector: 'app-grounddetail',
  templateUrl: './grounddetail.component.html',
  styleUrls: ['./grounddetail.component.css']
})

export class GrounddetailComponent implements OnInit {

  constructor(public dialog: MatDialog,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {}

  onClick(event: Gevent) {
    this.openEventdetail(event);
  }

  openEventdetail(event: Gevent) {
    this.dialog.open(EventdetailComponent, {width: '500px', height: '320px', panelClass: 'myapp-no-padding-dialog',
    data: {id: event.id,
        name: event.name,
        date: event.date,
        creator: event.creator,
        details: event.description}});
  }
}

