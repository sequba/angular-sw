import { Component, OnInit } from '@angular/core';
import { Character } from '../character';
import { CharacterService } from '../character.service';

@Component({
	selector: 'app-dashboard',
	template: `
	<h3>Top Heroes</h3>
	<div class="grid grid-pad">
		<a *ngFor="let c of characters" class="col-1-4">
	    	<div class="module character">
				<h4>{{c.name}}</h4>
	    	</div>
		</a>
	</div>
  	`,
	styles: []
})
export class DashboardComponent implements OnInit {
	characters: Character[] = [];

	constructor(private characterService: CharacterService) { }

	ngOnInit() {
		this.getCharacters();
	}

	getCharacters(): void {
		this.characterService.getCharacters().subscribe(
			result => this.characters = result.slice(1, 5)
		);
	}
}
