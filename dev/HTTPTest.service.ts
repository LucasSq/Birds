import {Component} from 'angular2/core';
import {Http} from "angular2/http";
import 'rxjs/add/operator/map';

@Injectable()
export class HTTPTestService {
	constructor (private _http: Http) {}
	
	getBirds() {
		return this._http.get('https://biiirds-d663d.firebaseio.com/Birds')
		.map(res => resjson());
	}
}