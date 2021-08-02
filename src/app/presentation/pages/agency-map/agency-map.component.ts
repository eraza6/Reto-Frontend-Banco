import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { Agency } from 'src/app/interfaces/agency';
import { AgencyService } from 'src/app/services/agency.service';
import { environment } from 'src/environments/environment';
import { google } from '@google/maps';

declare const google: any;

@Component({
  selector: 'app-agency-map',
  templateUrl: './agency-map.component.html',
  styleUrls: ['./agency-map.component.scss']
})
export class AgencyMapComponent implements OnInit, OnDestroy {

  @ViewChild('map', { static: true }) map: ElementRef;

   public agencias: Agency[];
   public apiKey:string= environment.apiKey;
   private subsc: any;

  constructor(private agencyService:AgencyService) { }

  ngOnInit(): void {

    this.getAgencies();
  }

  ngOnDestroy() {
    this.subsc.unsubscribe();
  }

  getAgencies(){
    this.subsc = this.agencyService.getAgency().subscribe(agencias => {
      this.agencias = agencias;
    },(error:any)=>{

    },()=>{
      this.initMap();

    });
  }

  initMap(){
    let loader = new Loader({
      apiKey: this.apiKey
    })

    loader.load().then(() => {

        var locations = this.agencias;

        var map = new google.maps.Map(this.map.nativeElement, {
          zoom: 10,
          center: new google.maps.LatLng(locations[0].lon, locations[0].lat),
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          gestureHandling: 'greedy'
        });

        var marker, i;
        let self= this;
        for (i = 0; i < locations.length; i++) {
          marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i].lon, locations[i].lat),
            map: map,
          });


          var infowindow = new google.maps.InfoWindow();

          google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                infowindow.setContent(`<div style="with:50px;height:70px;padding: 20px;">${locations[i].agencia}</div>`);
                infowindow.open(map, marker);
            }
        })(marker, i));


        }


    })
  }

}
