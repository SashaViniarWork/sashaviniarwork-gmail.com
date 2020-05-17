import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import {Gevent} from '../shared/gevent';
import {GEVENTS} from '../shared/gevents';

@Component({
  selector: 'app-eventdetail',
  templateUrl: './eventdetail.component.html',
  styleUrls: ['./eventdetail.component.css']
})
export class EventdetailComponent implements OnInit {
  gevents = GEVENTS;

  constructor() { }

  ngOnInit(): void {
  }

}
