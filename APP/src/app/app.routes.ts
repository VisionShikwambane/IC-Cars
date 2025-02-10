import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';

export const routes: Routes = [
    {
        path: '',
        component: UserComponent,
        children: [
            { path: '', loadComponent: () => import("./user/home/home.component").then(c => c.HomeComponent) }, // HomeComponent directly at root
            { path: 'car-service', loadComponent: () => import("./user/car-service/car-service.component").then(c => c.CarServiceComponent) },
            { path: 'car-parts', loadComponent: () => import("./user/car-parts/car-parts.component").then(c => c.CarPartsComponent) },
            { path: 'cars', loadComponent: () => import("./user/cars/cars.component").then(c => c.CarsComponent) },
            { path: 'about', loadComponent: () => import("./user/about-us/about-us.component").then(c => c.AboutUsComponent) },
            { path: 'contact', loadComponent: () => import("./user/contact/contact.component").then(c => c.ContactComponent) },
        ]
    },
    {
        path: 'admin',
        component: AdminComponent,
        children: [
            { path: '', loadComponent: () => import("./admin/invoice/invoice.component").then(c => c.InvoiceComponent) },
        ]
    },
];
