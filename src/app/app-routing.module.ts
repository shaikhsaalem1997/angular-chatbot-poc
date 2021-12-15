import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChatEngComponent } from './chat-eng/chat-eng.component';
import { ConfigComponent } from './config/config.component';

const routes: Routes = [
  {path:'config', component:ConfigComponent},
  {path:'',component:ChatEngComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
