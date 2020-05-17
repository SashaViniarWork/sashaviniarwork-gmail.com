import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import { MapInfoWindow, MapMarker, GoogleMap } from '@angular/google-maps';
import {Inject} from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EventdetailComponent } from '../eventdetail/eventdetail.component';
import {Gevent} from '../shared/gevent';
import {GEVENTS} from '../shared/gevents';

/*
class Event {
  id: string;
  name: string;
}
*/

export interface DialogData {
  id: string;
}

@Component({
  selector: 'app-grounddetail',
  templateUrl: './grounddetail.component.html',
  styleUrls: ['./grounddetail.component.css']
})

export class GrounddetailComponent implements OnInit {
  gevents = GEVENTS;
  name = 'Str Park Football Cort';
  address = 'Стрийська 105';
  type = 'Football Field';
  paid = 'false';
  content = 'some content';

  ngOnInit() {}
  onClick(event: Gevent) {
    this.openEventdetail();
  }

  constructor(public dialog: MatDialog) { }

  openEventdetail() {
    this.dialog.open(EventdetailComponent, {width: '500px', height: '450px'});
  }

}

