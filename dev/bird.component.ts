import {Component, OnInit} from 'angular2/core';
import {HTTPTestService} from "./HTTPTest.service"


@Component({
	selector: 'bird',
	templateUrl: 'dev/bird.component.html',
	providers: [HTTPTestService] 
})

export class BirdComponent implements OnInit {
	birds: any;	

	constructor(private _httpService: HTTPTestService) {}

	ngOnInit() {
		this._httpService.getBirds2().subscribe(
		(data) => this.birds = (data));
	}

};
