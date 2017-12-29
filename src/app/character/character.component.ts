import { Component, OnInit } from '@angular/core';
import { Character, HEROES } from '../character';

@Component({
	selector: 'app-character',
	template: `
	<h2>My Characters:</h2>
		<ul class="heroes">
			<li *ngFor="let c of characters"
				(click)="onSelect(c)"
				[class.selected]="c === selected">
				<a>
					<span class="badge">{{c.id}}</span> {{ c.name }}
				</a>
			</li>
		</ul>
	<div *ngIf="selected" >
		<h2>{{ selected.name | uppercase }} Details</h2>
		<div>
			<span>id: </span>{{selected.id}}
		</div>
		<div>
			<label>
				name:
				<input [(ngModel)]="selected.name" placeholder="name">
			</label>
		</div>
	</div>
	`,
	styles: [`
		.selected { font-weight: bold; } `]
})

export class CharacterComponent implements OnInit {
	characters: Character[] = HEROES;
	selected : Character;

	constructor() { }

	onSelect(c: Character): void {
		this.selected = c;
	}

	ngOnInit() {
	}

}
