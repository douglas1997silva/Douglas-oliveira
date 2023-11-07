import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './home/home/home.component';
import { BannerComponent } from './components/banner/banner.component';
import {SobreMimComponent} from './components/sobre-mim/sobre-mim.component';
import { SobreComponent } from './page/sobre/sobre.component';
import { SobreMimAbaComponent } from './page/sobre-mim-aba/sobre-mim-aba.component';
import { ResumoSobreComponent } from './components/resumo-sobre/resumo-sobre.component';
import { ProjetosComponent } from './components/projetos/projetos.component';
import { RodapeComponent } from './components/rodape/rodape.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    BannerComponent,
    SobreMimComponent,
    SobreComponent,
    SobreMimAbaComponent,
    ResumoSobreComponent,
    ProjetosComponent,
    RodapeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
