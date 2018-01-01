import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CharacterService } from './character.service';

import { AppComponent } from './app.component';
import { CharacterComponent } from './character/character.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';


@NgModule({
	declarations: [
		AppComponent,
		CharacterComponent,
		CharacterDetailsComponent,
		MessagesComponent
	],
	imports: [
		BrowserModule,
		FormsModule
	],
	providers: [
		CharacterService,
		MessageService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
