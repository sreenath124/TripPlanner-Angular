import { Component } from '@angular/core';
import { Trip } from './Trip';
import { TripDetail } from './TripDetails';



@Component({
  selector: 'my-app',
  moduleId: module.id,
  templateUrl: 'app.component.html'
})



export class AppComponent  { 
	trip: Trip = {
		startPoint : "",
		destination : "",
		stops : 0
	};
	tripDetails: TripDetail[];

	clicked(startPoint:string, destination:string, stops:string):void {
		let length = parseInt(stops);
			this.trip.startPoint = startPoint;
			this.trip.destination = destination;
			this.trip.stops = length;
			this.tripDetails = [];
		for (let i=0 ; i< length; i++) {
			let tripDetail :TripDetail={
				startPoint: "",
				destination: ""
			}
			if( i==0) {
				tripDetail.startPoint = this.trip.startPoint;
			}
			if( i== length-1) {
				tripDetail.destination = this.trip.destination;
			}
			this.tripDetails.push(tripDetail);
		}

	}

	syncData(index:number, locationType:string) {
		if(locationType == 'destinationLocation') {
			this.tripDetails[index + 1].startPoint = this.tripDetails[index].destination; 
		}
		else if (locationType == 'sourceLocation') {
			this.tripDetails[index - 1].destination = this.tripDetails[index].startPoint; 
		}
	}


}
