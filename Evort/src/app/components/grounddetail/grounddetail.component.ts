import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import { MapInfoWindow, MapMarker, GoogleMap } from '@angular/google-maps';
import {Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

class Event {
  id: string;
  name: string;
}

export interface DialogData {
  id: string;
}

@Component({
  selector: 'app-grounddetail',
  templateUrl: './grounddetail.component.html',
  styleUrls: ['./grounddetail.component.css']
})

export class GrounddetailComponent implements OnInit {
  name = 'Str Park Football Cort';
  address = 'dsfedgergergergergergege';
  type = 'Football Field';
  paid = 'false';
  events: Event[] = [
    {
      id: '0',
      name: 'Ia ibby',
    },
    {
      id: '1',
      name: 'Zucchipakoda',
    },
    {
      id: '0',
      name: 'Ia ibby',
    },
    {
      id: '1',
      name: 'Zucchipakoda',
    },
    {
      id: '0',
      name: 'Ia ibby',
    },
    {
      id: '1',
      name: 'Zucchipakoda',
    }
  ];
  content = 'some content';

  ngOnInit() {}

  onClick(event: Event) {
  }

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}

