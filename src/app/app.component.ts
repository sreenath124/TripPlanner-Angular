import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';

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

	addStop(index:number):void {
         this.tripDetails.splice(index+1,0,{startPoint:"aaa",
         	destination:"aaas"});
         	
	}	

	removeStop(index:number):void{
		let destination = this.tripDetails[index].destination,
			arrlength = this.tripDetails.length;
		if(index==0){
			return;
		}
		else if( index== arrlength-1) {
			this.tripDetails[index-1].destination = this.tripDetails[index].destination;
			this.tripDetails.splice(index,1);
		}
		else{
			this.tripDetails[index].destination= destination;	
			this.tripDetails.splice(index,1);
		}
		console.log(this);
	}

	trackByFn(index: number, stops: string) {
  		return index;
	}


}
