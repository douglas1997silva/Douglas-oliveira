import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { SobreComponent } from './page/sobre/sobre.component';

import { HomeComponent } from './home/home/home.component';

import { SobreMimComponent } from './components/sobre-mim/sobre-mim.component';
import { ProjetosComponent } from './components/projetos/projetos.component';

const routes: Routes = [{
  path: '', component:HomeComponent,
},
{
  path: 'sobre', component:SobreComponent,pathMatch:'full'
},
{path:'sobre-mim-aba',component:SobreMimComponent,pathMatch:'full'},
{path:'projetos', component:ProjetosComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
