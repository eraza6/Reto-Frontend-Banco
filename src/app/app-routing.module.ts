import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgencyComponent } from './presentation/pages/agency/agency.component';
import { AgencyDetailComponent } from './presentation/pages/agency-detail/agency-detail.component';
import { AgencyMapComponent } from './presentation/pages/agency-map/agency-map.component';

const routes: Routes = [
  { path: '', redirectTo:'/agency', pathMatch: 'full' },
  { path: 'agency', component: AgencyComponent },
  { path: 'agency-detail', component: AgencyDetailComponent },
  { path: 'agency-map', component: AgencyMapComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
