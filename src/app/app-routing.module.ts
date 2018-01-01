import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CharacterComponent } from './character/character.component';

const routes: Routes = [
	{ path: 'characters', component: CharacterComponent }
]

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ],
})
export class AppRoutingModule { }

