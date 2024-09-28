import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layout/default-layout/default-layout.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'list-task',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'list-task',
        loadChildren: () => import('./views/listar-tareas/listar-tareas.module').then(m => m.ListTaskModule)
      },
      {
        path: 'crear-tarea',
        loadComponent: () => import('./views/crear-tarea/crear-tarea.component').then(c => c.CrearTareaComponent)
      }
    ]
  },
  { path: '**', redirectTo: 'list-task' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top',
    anchorScrolling: 'enabled',
    initialNavigation: 'enabledBlocking'
  }),

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
