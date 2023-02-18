import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from 'src/Components/default/default.component';
import { HtmlTopdfComponent } from 'src/Components/html-topdf/html-topdf.component';
import { RegisterComponent } from 'src/Components/register/register.component';
import { ToDoAppsComponent } from 'src/Components/to-do-apps/to-do-apps.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/Default',
    pathMatch: 'full'
  },
  {
    path: 'Default',
    component: DefaultComponent
  },
  { path: 'Register', component: RegisterComponent },
  { path: 'todo-app', component: ToDoAppsComponent },
  { path: 'html-to-pdf', component: HtmlTopdfComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
