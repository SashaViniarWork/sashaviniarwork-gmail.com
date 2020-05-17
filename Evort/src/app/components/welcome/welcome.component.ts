import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { GrounddetailComponent } from '../grounddetail/grounddetail.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { GROUNDS } from '../shared/grounds';
import {Ground} from '../shared/ground';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit, AfterViewInit {
  /*
  private clearMarkers = true;
  private markerList = [];
  private gridSize = 64;
  private filters = [];
  private centre = [49, 11];
  private zoom = 10;
  private clusterArea = false;
  private maxBounds = {
    left: -179,
    top: 89,
    right: 179,
    bottom: -89
  };
   */

  @ViewChild('mapContainer', {static: false}) gmap: ElementRef;
  map: google.maps.Map;
  coordinates;
  openedInfo;

  grounds = GROUNDS;

  mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 10,
    scrollwheel: true,
    mapTypeId: google.maps.MapTypeId.HYBRID,
    zoomControl: true
  };
  markers  = [
    {
      position: new google.maps.LatLng(49.9214488, 24.1735642),
      title: 'Marker 1'
    },
    {
      position: new google.maps.LatLng(49.7214488, 24.0735642),
      title: 'Marker 2',
    }
  ];
  image = {
    url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    size: new google.maps.Size(20, 32),
  };

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition(position => {
      console.log(position);

      this.map.setCenter(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
    });
  }

  ngAfterViewInit() {
    this.mapInitializer();
  }

  mapInitializer() {
    this.map = new google.maps.Map(this.gmap.nativeElement, this.mapOptions);
    // this.startClustering();

    this.loadAllMarkers();
  }

  loadAllMarkers(): void {
    // tslint:disable-next-line:forin
    for (const g of GROUNDS) {
      const coords = g.coordinates.split(';');
      const lat = Number(coords[0]);
      const lng = Number(coords[1]);

      const marker = new google.maps.Marker({
        map: this.map,
        icon: this.image,
        position: new google.maps.LatLng(lat, lng),
        title: g.name,
      });

      const infoWindow = new google.maps.InfoWindow({
        content: marker.getTitle(),
      });

      marker.addListener('click', () => {
        if (this.openedInfo != null) {
          this.openedInfo.close();
        }
        this.map.setCenter(new google.maps.LatLng(marker.getPosition().lat(), marker.getPosition().lng()));
        this.openGrounddetail(g);
        console.log(g.id);
      });

      marker.addListener('mouseover', () => {
        if (this.openedInfo != null) {
          this.openedInfo.close();
        }
        this.openedInfo = infoWindow;
        infoWindow.open(marker.getMap(), marker);
      });

      marker.setMap(this.map);
    }
  }

  openGrounddetail(d: Ground) {
    this.dialog.open(GrounddetailComponent, {width: '500px', height: '450px', panelClass: 'myapp-no-padding-dialog',
      data: {id: d.id,
            name: d.name,
            address: d.address,
            type: d.groundType,
            paid: d.paid,
            maxPlayers: d.maxPlayers,
            events: d.events}});
  }

  /*
  //  Google API

  startClustering(): void {
    google.maps.event.addListener(this.map, 'idle', () => {
      if (this.zoom > 13) {
        this.cluster();
      } else {
        this.removeAllMarkers();
        this.zoom = this.getZoom();
      }
    });

    google.maps.event.addListener(this.map, 'zoom_changed', () => {
      this.removeAllMarkers();
    });
  }

  getZoom() {
    return this.map.getZoom();
  }

  getViewport(): any {
    let viewport;
    let viewPortJson;
    viewport = this.map.getBounds();

    viewPortJson = {
      left: viewport.getSouthWest().lng(),
      top: viewport.getNorthEast().lat(),
      right: viewport.getNorthEast().lng(),
      bottom: viewport.getSouthWest().lat()
    };

    return viewPortJson;
  }

  drawMarker(cluster): any {
    let center;
    let count;
    center = new google.maps.LatLng(cluster.center.y, cluster.center.x);
    count = cluster.count;

    let marker;
    marker = new google.maps.Marker({
      position: center,
      map: this.map,
    });

    this.markerList.push(marker);
  }


  //  Anycluster funcs

  cluster(): void {

    let geometryType;
    let geoJson;
    if (this.clusterArea === false) {
      console.log('clusterArea');
      const viewPortJson = this.getViewport();
      geoJson = this.viewportToGeoJson(viewPortJson);
      geometryType = 'viewport';
    } else {
      geoJson = this.clusterArea;
      geometryType = 'strict';
    }
    this.getClusters(geoJson, geometryType);
  }

  getClusters(geoJson, geometryType): any {
    this.zoom = this.getZoom();
    let url;
    let  postParams;
    url = 'http://localhost:8000/anycluster/' + 'grid' + '/' + this.zoom + '/' + this.gridSize + '/';

    postParams = {
      geojson: geoJson,
      filters: this.filters,
      geometry_type: geometryType
    };

    let xhr;
    xhr = new XMLHttpRequest();
    xhr.onload = () => {
      if (this.clearMarkers === true) {
        this.removeAllMarkers();
      }

      let clusters;
      clusters = JSON.parse(xhr.responseText);

      if (clusters.length > 0 && geometryType === 'strict') {
        this.removeAllMarkers();
      }

      for (let i = 0; i < clusters.length; i++) {
        const cluster = clusters[i];
        this.drawMarker(cluster);
      }
    };
    xhr.open('POST', url, true);
    xhr.send(JSON.stringify(postParams));
  }

  viewportToGeoJson(viewport) {

    if (viewport.left < this.maxBounds.left) {
      viewport.left = this.maxBounds.left;
    }

    if (viewport.bottom < this.maxBounds.bottom) {
      viewport.bottom = this.maxBounds.bottom;
    }

    if (viewport.top > this.maxBounds.top) {
      viewport.top = this.maxBounds.top;
    }

    if (viewport.right > this.maxBounds.right) {
      viewport.right = this.maxBounds.right;
    }
    let geomtype;
    let coordinates;
    if (viewport.left > viewport.right) {
      geomtype = 'MultiPolygon';
      coordinates = [ [
        [ viewport.left, viewport.top ],
        [ 179, viewport.top ],
        [ 179, viewport.bottom ],
        [ viewport.left, viewport.bottom ],
        [ viewport.left, viewport.top ]
      ],
        [
          [ -179, viewport.top ],
          [ viewport.right, viewport.top ],
          [ viewport.right, viewport.bottom ],
          [ -179, viewport.bottom ],
          [ -179, viewport.top ]
        ]];
    } else {
      geomtype = 'Polygon';
      coordinates = [ [
        [ viewport.left , viewport.top ],
        [ viewport.right , viewport.top ],
        [ viewport.right , viewport.bottom ],
        [ viewport.left , viewport.bottom ],
        [ viewport.left , viewport.top ]
      ]];
    }

    let geoJson;
    geoJson = {
      type: 'Feature',
      properties : {},
      geometry: {
        type: geomtype,
        coordinates,
      }
    };
    return geoJson;
  }

  removeAllMarkers(): any {
    for (let i = 0; i < this.markerList.length; i += 1) {
      this.markerList[i].setMap(null);
    }
    if (typeof(this.map.data) === 'object') {
      this.map.data.forEach(function(feature) {
        this.map.data.remove(feature);
      });
    }

    this.clearMarkers = false;
    this.markerList.length = 0;
  }

  // Example
  // this.addFilters([
  //                   {style: {values: 'imperial', operator: '='}}
  //                 ]);

  addFilters(newfilters): void {
    for (let f = 0; f < newfilters.length; f++) {
      this.filters.push(newfilters[f]);
    }

    this.clearMarkers = true;
  }

  removeFilters(activefilters): void {

    for (let i = 0; i <= activefilters.length; i++) {
      delete this.filters[ activefilters[i] ];
    }

    this.clearMarkers = true;
  }
   */
}
