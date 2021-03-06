import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{path:"test",loadChildren:()=>import('./test/test.module').then(mod=>mod.TestModule)},
{path:"user",loadChildren:()=>import('./user/user.module').then(mod=>mod.UserModule)}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }