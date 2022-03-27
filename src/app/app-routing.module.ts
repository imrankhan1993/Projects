import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './layout/sidebar/sidebar.component';

const routes: Routes = [
  { path: '', redirectTo: '/authors', pathMatch: 'full' },
  {
  
  path: '',
  component: SidebarComponent,
  children : [
  {
    path: '',
    loadChildren: () => import('./authors/authors.module').then(m => m.AuthorsModule),

  }
]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
