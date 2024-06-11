/*import { Routes } from '@angular/router';*/
import { NgModule } from '@angular/core';


import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactosComponent } from './contactos/contactos.component';
import { RouterModule, Routes } from '@angular/router';



export const routes: Routes = [
    {
        path:'home',
        component: HomeComponent
      },
      {
        path:'nosotros',
        component: NosotrosComponent
      },
      {
        path:'servicios',
        component: ServiciosComponent
      },
      {
        path:'contactos',
        component: ContactosComponent
      },
      
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    
  })
  export class AppRoutingModule { } 
  
