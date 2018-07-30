import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClinicstoryComponent } from './clinicstory/clinicstory.component';
import { ListClinicStoryComponent } from './clinicStory/list-clinic-story/list-clinic-story.component';
import { ClinicstorydetailsComponent } from './clinicstorydetails/clinicstorydetails.component';

const routes: Routes = [
  {path: 'add-clinic-story', component: ClinicstoryComponent},
  {path: 'list-clinic-story', component: ListClinicStoryComponent},
  {path: 'clinic-story-details/:id', component: ClinicstorydetailsComponent},
  {
    path: '',
    redirectTo: '/list-clinic-story',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
