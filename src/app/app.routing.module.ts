import { NgModule } from '@angular/core';
// Rutas
import { Routes, RouterModule } from '@angular/router';
// Componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';

const app_routes: Routes =[
    {path:'',component:PortfolioComponent},
    {path:'about',component:AboutComponent},
    {path:'item',component:ItemComponent},
    {path:'**',redirectTo:''}
];

@NgModule({
    imports: [
        RouterModule.forRoot( app_routes, {useHash:true} )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }