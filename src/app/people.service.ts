import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Person, PeopleBatch } from './person';
import { LoggingService } from './logging.service';

@Injectable()
export class PeopleService {
	url = 'https://swapi.co/api/people/';

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
		
		this.logger.log('fetching people);

		return this.httpClient.get<PeopleBatch>(url)
		.pipe(
			tap(_ => this.logger.log('fetched people')),
			catchError(this.handleError('getPeople', this.noResult))
		)
	}

	private handleError<T> (operation = 'operation', result: T) {
		return (error: any): Observable<T> => {
			this.logger.log(`${operation} failed: ${error.message}`);
			return of(result as T);
		}
	}

}
