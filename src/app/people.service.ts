import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Person, PeopleBatch } from './person';

@Injectable()
export class PeopleService {
	url = 'https://swapi.co/api/people/';

	constructor(
		private httpClient: HttpClient
	) { }

	getPeople() : Observable<Person[]> {
		return this.httpClient.get<PeopleBatch>(this.url)
		.pipe(
			tap(_ => this.log('fetched people')),
			map(data => data.results),
			catchError(this.handleError('getPeople', []))
		)
	}

	private handleError<T> (operation = 'operation', result: T) {
		return (error: any): Observable<T> => {
			this.log(`${operation} failed: ${error.message}`);
			return of(result as T);
		}
	}
			
	private log(message: string) {
		console.log(message);
	}

}
