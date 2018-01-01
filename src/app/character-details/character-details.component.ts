import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../character';

@Component({
	selector: 'app-character-details',
	template: `
	 <div *ngIf="character" >
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
	    </div>
	`,
	styles: []
})
export class CharacterDetailsComponent implements OnInit {
	@Input() character : Character;

	constructor() { }

	ngOnInit() {
	}

}
