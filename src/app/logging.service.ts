import { Injectable } from '@angular/core';

@Injectable()
export class LoggingService {

	constructor() { }

	log(message: string) {
		console.log(message);
	}

}
