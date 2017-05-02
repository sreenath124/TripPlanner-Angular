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
		let stop: TripDetail = {
			startPoint:"",
         	destination:""
		}
         this.tripDetails.splice(index,0,stop);
         this.tripDetails[index].startPoint = this.tripDetails[index+1].startPoint;
         this.tripDetails[index+1].startPoint  = "";
         	
	}	

	removeStop(index:number):void{
		let arrayLength = this.tripDetails.length;
		if(index == arrayLength - 1) {
			let stopPoint = this.tripDetails[index].destination;
			this.tripDetails.splice(index,1);
			this.tripDetails[index-1].destination = stopPoint;
			return;
		}
		let stopPoint = this.tripDetails[index].startPoint;
		this.tripDetails.splice(index,1);
		this.tripDetails[index].startPoint = stopPoint;

		

	}

	trackByFn(index: number, stops: string) {
  		return index;
	}


}
