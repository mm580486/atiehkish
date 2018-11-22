import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './layoutes/public/public.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { ServicesComponent } from './pages/services/services.component';
import { ProductsComponent } from './pages/products/products.component';
import { EventsComponent } from './pages/events/events.component';
import { StartupComponent } from './pages/startup/startup.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

const routes: Routes = [

  {
    path: '',
    component: PublicComponent,
    children: [
      { path: '', component: HomeComponent},
      { path: 'contact-us', component: ContactUsComponent},
      { path: 'services', component: ServicesComponent},
      { path: 'products', component: ProductsComponent},
      { path: 'events', component: EventsComponent},
      { path: 'startup', component: StartupComponent},
      { path: '**', component: NotfoundComponent},

    ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
