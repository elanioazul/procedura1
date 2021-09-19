import { AfterViewInit, Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { environment } from '../../../environments/environment';
import Procedural from 'procedural-gl';
@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnInit, AfterViewInit {

  public coord = { latitude: 42.724705, longitude: 0.207672 };

  public datasource = {
    elevation: {
      apiKey:  environment['nasadem-apikey'],
      attribution: '&copy;<a href="https://www.nasadem.xyz">nasadem.XYZ</a>',
      pixelEncoding: 'nasadem', // or 'terrain-rgb', 'terrarium'
      maxZoom: 9,
      urlFormat: `https://www.nasadem.xyz/api/v1/dem/{z}/{x}/{y}.png?key=${environment['nasadem-apikey']}`
    },
    imagery: {
      apiKey:  environment['maptiler-apikey'],
      urlFormat: `https://api.maptiler.com/tiles/satellite/{z}/{x}/{y}.jpg?key=${environment['maptiler-apikey']}`,
      attribution: '<a href="https://www.maptiler.com/copyright/">Maptiler</a> <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 15
    },
  };


  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    // Initialize library and optionally add UI controls
    Procedural.init( {
      container: document.getElementById( 'container' ),
      datasource: this.datasource
     } );
    Procedural.setRotationControlVisible( true );

    // Load real-world location
    Procedural.displayLocation( this.coord );

  }


}
