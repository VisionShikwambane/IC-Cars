import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';

export const routes: Routes = [

    {
        path: '',
        component: UserComponent,
        children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'home', loadComponent:  () =>import("./user/home/home.component").then(c=>c.HomeComponent) },
        { path: 'car-service', loadComponent:  () =>import("./user/car-service/car-service.component").then(c=>c.CarServiceComponent) },
        { path: 'car-parts', loadComponent:  () =>import("./user//car-parts/car-parts.component").then(c=>c.CarPartsComponent) },
        ]
      },
    
      {
        path: 'admin',
        component: AdminComponent,
        children: [
         { path: '', redirectTo: 'invoices', pathMatch: 'full' },
         { path: 'invoice', loadComponent:  () =>import("./admin/invoice/invoice.component").then(c=>c.InvoiceComponent) },
       
        ]
      },
];
