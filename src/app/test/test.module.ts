import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { LoginComponent } from './login/login.component';

console.warn("outlet initiated");
@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    TestRoutingModule
  ]
})
export class TestModule { }
