import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-navigation',
	template: `
	<nav>
		<a routerLink="/characters">Characters</a>
	</nav>
	`,
	styles: []
})
export class NavigationComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

}
