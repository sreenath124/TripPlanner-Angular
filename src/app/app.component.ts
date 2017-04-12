import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  moduleId: module.id,
  templateUrl: 'app.component.html'
})

export class AppComponent  { 
	startPoint:string;
	destination:string;
	stops:number;
	stopDummyArray: string[];
	startPointArray:string[];
	destinationArray:string[];
	newStartPoint:string;
	newDestination:string;
	constructor () {
		this.startPoint = "";
		this.destination = "";
		this.newStartPoint = "";
		this.newDestination ="";
	}

	clicked(startPoint:string, destination:string, stops:string):void {
		var length = parseInt(stops);
		this.stopDummyArray = new Array(length).fill("a");
		this.stops = length;
		this.startPoint = startPoint;
		this.destination = destination;

	}

}
