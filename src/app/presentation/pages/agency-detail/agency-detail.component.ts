import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Agency } from 'src/app/interfaces/agency';

@Component({
  selector: 'app-agency-detail',
  templateUrl: './agency-detail.component.html',
  styleUrls: ['./agency-detail.component.scss']
})
export class AgencyDetailComponent implements OnInit {

  action:boolean;
  alertDanger:boolean;
  public id:number=0;
  loading:boolean;
  public agency:Agency;
  index: number = 1;
  displaySuccess = 'none';
  htmlmodalGeneral:string;

  constructor(private router:Router) {
    this.loading = true;
    this.action=true;
    this.alertDanger=false;
  }

  ngOnInit(): void {
    this.showLoading(2000);
    var urlParams = new URLSearchParams(window.location.search);
    if(urlParams.has('id')){
      this.id = parseInt(urlParams.get('id'));
      this.agency=JSON.parse(localStorage.getItem('agencies'))[this.id];
      this.action=false;
    }else{
      this.initCreate();
      this.action=true;
    }

  }

  // Si action tiene valor true Agregara pero si es diferente Actualizara
  actionButton(){
    if(this.action==false){
      let agencies = JSON.parse(localStorage.getItem('agencies'));
      agencies[this.id]=this.agency;
      localStorage.setItem('agencies',JSON.stringify(agencies));
      this.displaySuccess = 'block';
      this.htmlmodalGeneral = `<div class="d-flex flex-column justify-content-center">
      <p class="text-center  rs-font-14">Se ha actualizado con exito</p></div>`;
      this.showLoading(1000)
    }else{
      let agencies = JSON.parse(localStorage.getItem('agencies'));
      agencies.push(this.agency);
      localStorage.setItem('agencies',JSON.stringify(agencies));
      this.displaySuccess = 'block';
      this.htmlmodalGeneral = `<div class="d-flex flex-column justify-content-center">
      <p class="text-center  rs-font-14">Se ha creado con exito</p></div>`;
      this.showLoading(1000)
    }

  }
  cancel(){
    this.router.navigate(['/']);
  }
  goHome() {
      this.router.navigate(['/']);
  }

  initCreate(){
    this.agency={
      agencia: '',
      distrito:  '',
      provincia:  '',
      departamento: '',
      direccion:  '',
      lat: -76.957646,
      lon: -12.158153
    };
  }

  showLoading(time) {
    setTimeout(() => {
      this.loading = false
    }, time);
  }

}
