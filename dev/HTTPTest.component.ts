import {Component} from 'angular2/core';
import {HTTPTestService} from "./HTTPTest.service"

@Component({
    selector: 'HTTPTest',
    template: `
    	<button (click)="onTestGet()"></button>
    	<p>Output: {{getData}}</p>
    	<button></button>
    	<p>Output: {{postData}}</p>
    `,
    providers: [HTTPTestService]
})
export class HTTPTestComponent{

	getData: string;

	constructor (private _httpService: HTTPTestService) {}

	onTestGet() {
		this._httpService.getBird()
		.subscribe(
			data => this.getData = JSON.stringify(data),
			error => alert(error),
			  () => console.log("Finished")
		);

	}

}