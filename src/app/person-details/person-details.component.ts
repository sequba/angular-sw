import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { LoggingService } from '../logging.service';
import { PeopleService } from '../people.service';
import { Person } from '../person';

@Component({
	selector: 'app-person-details',
	template: `
		<div *ngIf="person">
			<h3>{{ person.name }}</h3>
			<table>
				<tr *ngFor="let key of visibleKeys">
					<td>{{ key.displayName }}:</td>
					<td>{{ person[key.key] }}</td>
				</tr>
			</table>
		</div>
	`,
	styles: []
})
export class PersonDetailsComponent implements OnInit {
	visibleKeys: Array<{key: string, displayName: string}> = [
		{key: 'height', displayName: 'Height'},
		{key: 'mass', displayName: 'Mass'},
		{key: 'hair_color', displayName: 'Hair'},
		{key: 'skin_color', displayName: 'Skin'},
		{key: 'eye_color', displayName: 'Eyes'},
		{key: 'birth_year', displayName: 'Year of birth'},
		{key: 'gender', displayName: 'Gender'},
	];

	personId: number;
	person: Person;

	constructor(
		private peopleService: PeopleService,
		private logger: LoggingService,
		private route: ActivatedRoute,
	) { }

	ngOnInit() {
		var idParam = this.route.snapshot.paramMap.get('id');
		if(idParam) {
			this.personId = parseInt(idParam);
			this.getPerson(this.personId);
		} else {
			this.logger.log('Error: no id parameter in url');
		}
	}

	private getPerson(id: number) {
		this.peopleService.getPerson(id)
			.subscribe(response => {
				if(response) {
					this.person = response;
				} else {
					this.logger.log('Error. Try again?');
				}
			});
	}
}
