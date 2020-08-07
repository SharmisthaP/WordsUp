import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from './components/homepage/homepage.component'; 
import { DocumentsComponent } from './components/documents/documents.component';
import { WordsComponent} from './components/words/words.component';
import { AddtopicsComponent } from './components/addtopics/addtopics.component';

const routes: Routes = [
  { path:'',component:HomepageComponent},
  {path :'doc',component:DocumentsComponent},
  { path: 'word',component:WordsComponent},
  { path: 'topics' , component:AddtopicsComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
