import {Component} from 'angular2/core';
import {BirdComponent} from "./bird.component";
import {HTTPTestComponent} from "./HTTPTest.component";

@Component({
    selector: 'my-app',
    template: `
        <h1>Angular 2 Boilerplate</h1>
        <p>blablabl</p>
        <bird></bird>
        <div class = "main">
        	<HTTPTest></HTTPTest>
    `,
    directives: [BirdComponent, HTTPTestComponent]
})
export class AppComponent {

}