import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from './auth/guards/admin.guard';
import { CommonModule } from '@angular/common';

/*

import { AdminComponent } from './admin/admin.component';
import { ProfesionalesComponent } from './profesionales/profesionales.component';
*/


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/pages/login/login.module').then(m => m.LoginModule),
    data: { animation: 'login' }
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./auth/pages/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./auth/pages/register/register.module').then(m => m.RegisterModule),
    data: { animation: 'registro' }
  },
  {
    path: 'verification-email',
    loadChildren: () => import('./auth/pages/send-email/send-email.module').then(m => m.SendEmailModule)
  },
  {
    path: 'pass-email-incorrecto',
    loadChildren: () => import('./auth/pages/user-pass-incorrecto/user-pass-incorrecto.module').then(m => m.UserPassIncorrectoModule)
  },
  {
    path: 'permisoDenegado',
    loadChildren: () => import('./auth/pages/permiso-denegado/permiso-denegado.module').then(m => m.PermisoDenegadoModule)
  }
  /*,
  {
    path: 'turnoReserva',
    loadChildren: () => import('./turnos/pages/turnos-board/turnos-board.module').then(m => m.TurnosBoardModule),
    canActivate: [AdminGuard],
  },
  {
    path: 'turnoListado',
    loadChildren: () => import('./turnos/pages/turnos-listado/turnos-listado.module').then(m => m.TurnosListadoModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./layout/home/home.module').then(m => m.HomeModule),
    data: { animation: 'home' }
  },
  {
    path: 'historiaClinica',
    loadChildren: () => import('./pacientes/pages/historia-clinica/historia-clinica.module').then(m => m.HistoriaClinicaModule)
  },
  {
    path: 'especialidades',
    loadChildren: () => import('./especialidades/especialidades.module').then(m => m.EspecialidadesModule)
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./informes/informes.module').then(m => m.InformesModule)
      }
      ,
      {
        path: 'informes',
        loadChildren: () => import('./informes/informes.module').then(m => m.InformesModule)
      },
      {
        path: 'especialidades',
        loadChildren: () => import('./especialidades/especialidades.module').then(m => m.EspecialidadesModule)
      },
      {
        path: 'usuarios',
        loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
      }
    ]
  },
  {
    path: 'profecionales',
    component: ProfesionalesComponent,
    children: [
      /*
      {
        path: '',
        loadChildren: () => import('./informes/informes.module').then(m => m.InformesModule)
      }
      ,
      {
        path: 'informes',
        loadChildren: () => import('./informes/informes.module').then(m => m.InformesModule)
      },
      {
        path: 'especialidades',
        loadChildren: () => import('./especialidades/especialidades.module').then(m => m.EspecialidadesModule)
      },
      {
        path: 'usuarios',
        loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
      }
    ]
  }*/
]

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }


/*
  { path: 'turnoReserva', component: TurnosBoardComponent },
   path: 'turnoListado', component: TurnosListadoComponent },
  { path: 'historiaClinica', component: HistoriaClinicaComponent },
*/



/*

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'pageNotFound', component: PageNotFoundComponent },
  { path: 'login', component: LoginComponent ,  data: {animation: 'login'}},
  { path: 'registro', component: RegisterComponent ,  data: {animation: 'registro'}},
  { path: 'verificaemail', component: SendEmailComponent },
  { path: 'turnoReserva', component: TurnosBoardComponent },
  { path: 'turnoListado', component: TurnosListadoComponent },
  { path: 'historiaClinica', component: HistoriaClinicaComponent },
  { path: 'profecionales', component: UserListadoComponent },
  { path: 'turnosGrid', component: TurnosGridComponent },
  { path: 'quienesSomos', component: QuienesSomosComponent },
  { path: 'planes', component: PlanesComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'rrhh', component: RrhhComponent },
  {
    path: 'cpanel',
    component: CpanelBoardComponent,
    children:
      [{ path: '', component: CpanelLoginComponent },
      { path: 'administrador', component: CpanelAdminComponent },
      { path: 'profesional', component: CpanelProfComponent }]
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'upload-image', loadChildren: () => import('./shared/upload-image/uload-image.module').then(m => m.UloadImageModule) },
  { path: '**', component: PageNotFoundComponent },
];


*/





/*

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoardComponent } from './games/components/board/board.component';

const routes: Routes = [
  {
    path: 'juegos',
    // loadChildren: () => import('./games/components/board/board.module').then(m => m.BoardModule),
    component: BoardComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./games/components/layout-games/layout.module').then(m => m.LayoutModuleModule),
      },
      {
        path: 'adivina',
        loadChildren: () => import('./games/pages/adivina/adivina.module').then(m => m.AdivinaModule),
      },
      {
        path: 'agilidad',
        loadChildren: () => import('./games/pages/agilidad/agilidad.module').then(m => m.AgilidadModule),
      }
      ,
      {
        path: 'ppt',
        loadChildren: () => import('./games/pages/ppt/ppt.module').then(m => m.PptModule),
      }
      ,
      {
        path: 'tateti',
        loadChildren: () => import('./games/pages/tateti/tateti.module').then(m => m.TatetiModule),
      }
      ,
      {
        path: 'anagrama',
        loadChildren: () => import('./games/pages/anagrama/anagrama.module').then(m => m.AnagramaModule),
      }
      ,
      {
        path: 'memotest',
        loadChildren: () => import('./games/pages/memotest/memotest.module').then(m => m.MemotestModule),
      }
      ,
      {
        path: 'casaca',
        loadChildren: () => import('./games/pages/casaca/casaca.module').then(m => m.CasacaModule),
      }
    ]
  }
  ,
  {
    path: 'ranking',
    loadChildren: () => import('./games/components/jugadas-listado/jugadas-listado.module').then(m => m.JugadasListadoModule),
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

*/
