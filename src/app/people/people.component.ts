import { Component, OnInit } from '@angular/core';

import { PeopleService } from '../people.service';
import { Person } from '../person';

@Component({
	selector: 'app-people',
	template: `
		<ul>
			<li *ngFor="let person of people">
	        	<a>{{ person.name }}</a>
	    	</li>
		</ul>
  	`,
	styles: []
})
export class PeopleComponent implements OnInit {
	people: Person[];

	constructor(
		private peopleService: PeopleService
	) { }

	ngOnInit() {
		this.peopleService.getPeople()
			.subscribe(people => this.people = people);
	}

}
