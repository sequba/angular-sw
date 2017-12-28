import { Component, OnInit } from '@angular/core';
import { Character } from '../character';

@Component({
	selector: 'app-character',
	template: `
	<h2>{{ character.name | uppercase }} Details</h2>
	<div>
		<span>id: </span>{{character.id}}
	</div>
	<div>
		<label>
			name:
			<input [(ngModel)]="character.name" placeholder="name">
	    </label>
	</div>
	`,
	styles: []
})

export class CharacterComponent implements OnInit {
	character : Character = {
		id: 1,
		name: 'Luke'
	};

	constructor() { }

	ngOnInit() {
	}

}
