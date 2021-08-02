import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Agency } from 'src/app/interfaces/agency';
import { AgencyService } from 'src/app/services/agency.service';

@Component({
  selector: 'app-agency',
  templateUrl: './agency.component.html',
  styleUrls: ['./agency.component.scss']
})
export class AgencyComponent implements OnInit, OnDestroy {

  loading: boolean;
  alertDanger: boolean;
  agencies: Agency[];
  private subsc: any;
  numRandom: number = 0;

  constructor(private router:Router, private agencyServ: AgencyService) {
    this.loading = true;
    this.alertDanger = false;
    this.agencies = [];
  }

  ngOnInit(): void {
    this.showLoading();
   this.numerosAleatorios(300,330)
  //this.numRandom = Math.round(Math.random() * (330 - 300) + 300);
    this.getAgency();
  }

  ngOnDestroy() {
    this.subsc.unsubscribe();
  }

  showLoading() {
    setTimeout(() => {
      this.loading = false
    }, 2000);
  }


  getAgency(): void {
    this.subsc = this.agencyServ.getAgency().subscribe(agencies => {
      this.agencies = agencies;
    },(error)=>{
      this.alertDanger = true;
    });
  }

  updateAgency(i){
    this.router.navigate(['/agency-detail'], { queryParams: { id: i } });
  }

  addAgency(){
    this.router.navigate(['/agency-detail'], { queryParams: { } });
  }

  showMap(){
    this.router.navigate(['/agency-map']);

  }

  numerosAleatorios(min, max) {
    this.numRandom = Math.round(Math.random() * (330 - 300) + 300);
     return this.numRandom;
 }

}
