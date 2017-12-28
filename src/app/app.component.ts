import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	template: `
		<h1>{{title}}</h1>
		<app-character></app-character>
	`,
	styles: [`
		h1 {
			//color: #369;
			//font-family: Arial, Helvetica, sans-serif;
			//font-size: 250%;
		}
	`]
})
export class AppComponent {
	title = 'Angular SW Guide';
}
