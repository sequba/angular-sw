import { Component, OnInit } from '@angular/core';

import { PeopleService } from '../people.service';
import { Person } from '../person';

@Component({
	selector: 'app-people',
	template: `
		<ul>
			<li *ngFor="let person of people">
				<a routerLink="/people/{{ person.id }}">{{ person.name }}</a>
	    	</li>
		</ul>
		<div *ngIf="morePeopleUrl">
			<button (click)="getPeople(morePeopleUrl)">Load more</button>
		</div>
  	`,
	styles: []
})
export class PeopleComponent implements OnInit {
	people: Person[] = [];
	morePeopleUrl?: string;
	peopleNum?: number;

	constructor(
		private peopleService: PeopleService
	) { }

	ngOnInit() {
		this.getPeople();
	}

	getPeople(url?: string) {
		this.peopleService.getPeople(url)
			.subscribe(response => {
				this.people = this.people.concat(response.results);
				this.morePeopleUrl = response.next;
				this.peopleNum = response.count;
			});
	}

}
