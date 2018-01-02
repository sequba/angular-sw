import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Person, PeopleBatch } from './person';
import { LoggingService } from './logging.service';

@Injectable()
export class PeopleService {
	url: string = 'https://swapi.co/api/people/';

	noResult: PeopleBatch = {
		results: [],
	};

	constructor(
		private httpClient: HttpClient,
		private logger: LoggingService,
	) { }

	getPeople(url?: string) : Observable<PeopleBatch> {
		if(!url) {
			url = this.url;
		}

		this.logger.log('fetching people');

		return this.httpClient.get<PeopleBatch>(url)
		.pipe(
			tap(_ => this.logger.log('fetched people')),
			map(response => this.extractIds(response)),
			catchError(this.handleError('getPeople', this.noResult))
		)
	}

	getPerson(id: number): Observable<Person | null> {
		var url = this.url + id;

		this.logger.log('fetching person');

		return this.httpClient.get<Person | null>(url)
		.pipe(
			tap(_ => this.logger.log('fetched person')),
			map(response => response ? this.extractId(response) : response ),
			catchError(this.handleError('getPerson', null))
		)

	}

	private extractId(person: Person): Person {
		var numFromUrl = person.url.match(/[0-9]+/);
		if(numFromUrl) {
			person.id = parseInt(numFromUrl[0]);
		}
		return person;
	}

	private extractIds(batch: PeopleBatch): PeopleBatch {
		var people = batch.results;
		people = people.map(this.extractId);
		batch.results = people;
		return batch;
	}

	private handleError<T> (operation = 'operation', result: T) {
		return (error: any): Observable<T> => {
			this.logger.log(`${operation} failed: ${error.message}`);
			return of(result as T);
		}
	}

}
