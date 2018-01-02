import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PeopleComponent } from './people/people.component';
import { PersonDetailsComponent } from './person-details/person-details.component';

const routes: Routes = [
	{ path: 'people', component: PeopleComponent },
	{ path: 'people/:id', component: PersonDetailsComponent },
	{ path: '', redirectTo: '/people', pathMatch: 'full' },
]

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ],
})
export class AppRoutingModule { }

