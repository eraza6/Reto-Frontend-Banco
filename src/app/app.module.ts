import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgencyComponent } from './presentation/pages/agency/agency.component';
import { AgencyDetailComponent } from './presentation/pages/agency-detail/agency-detail.component';
import { LoadingComponent } from './presentation/components/loading/loading.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgencyMapComponent } from './presentation/pages/agency-map/agency-map.component';
import { AgencyService } from './services/agency.service';
import { ModalComponent } from './presentation/components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    AgencyComponent,
    AgencyDetailComponent,
    LoadingComponent,
    AgencyMapComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AgencyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
