import { Component, OnInit } from '@angular/core';

import { Person } from '../person';

@Component({
	selector: 'app-person-details',
	template: `
		<h3>{{ person.name }}</h3>
		<table>
			<tr *ngFor="let key of visibleKeys">
				<td>{{ key.printName }}</td>
				<td>{{ person[key.key] }}</td>
			</tr>
		</table>
	`,
	styles: []
})
export class PersonDetailsComponent implements OnInit {
	visibleKeys: Array<{key: string, printName: string}> = [
		{key: 'name', printName: 'Name'},
	];

	person: Person;

	constructor() { }

	ngOnInit() {
	}

}
