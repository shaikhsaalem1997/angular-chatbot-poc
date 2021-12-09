import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChatEngComponent } from './chat-eng/chat-eng.component';
import { KernelComponent } from './kernel/kernel.component'

const routes: Routes = [
  {path:'neo',component:ChatEngComponent},
  {path:'',component:KernelComponent},
  {path:'kernel',component:KernelComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
