import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { MessageService } from './message.service';
import { Character, HEROES } from './character';

@Injectable()
export class CharacterService {

	constructor(private messageService: MessageService) { }

	getCharacters(): Observable<Character[]> {
		this.messageService.add('CharacterService: fetching characters');
		return of(HEROES);
	}
}
