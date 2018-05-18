import { AboutComponent } from './components/about/about.component';
import { RouterModule, Routes } from '@angular/router';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { PortafolioItemComponent } from './components/index.paginas';



const app_routes: Routes = [
  { path: '', component: PortafolioComponent },
  { path: 'nosotros', component: AboutComponent },
  { path: 'home', component: PortafolioComponent },
  { path: 'producto', component: PortafolioItemComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const app_routing = RouterModule.forRoot(app_routes, { useHash:true });
