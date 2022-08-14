import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadComponent } from './read/read.component';
import { FormsModule } from '@angular/forms';
import { UserTextComponent } from './read/user-text/user-text.component';
const routes: Routes = [
  { path: 'read', component: ReadComponent },
  { path: 'read/text', component: UserTextComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
