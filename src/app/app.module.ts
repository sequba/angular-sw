import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { PeopleService } from './people.service';
import { PeopleComponent } from './people/people.component';


@NgModule({
	declarations: [
		AppComponent,
		PeopleComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		AppRoutingModule
	],
	providers: [ PeopleService ],
	bootstrap: [ AppComponent ]
})
export class AppModule { }
