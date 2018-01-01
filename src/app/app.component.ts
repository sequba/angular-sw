import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	template: `
		<h1>{{title}}</h1>
		<app-navigation></app-navigation>	
		<router-outlet></router-outlet>
		<app-messages></app-messages>
	`,
	styles: [`
	`]
})
export class AppComponent {
	title = 'Angular SW Guide';
}
