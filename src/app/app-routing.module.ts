import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClinicstoryComponent } from './clinicstory/clinicstory.component';
import { ListClinicStoryComponent } from './clinicStory/list-clinic-story/list-clinic-story.component';

const routes: Routes = [
  {path: 'add-clinic-story', component: ClinicstoryComponent},
  {path: 'list-clinic-story', component: ListClinicStoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
