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

	addStop(index:number):void {
		let counter = this.tripDetails.length;
         const rowCounter = index;

         for(counter;counter>rowCounter+1;counter--){
             var data1=this.tripDetails[counter-1].startPoint;
             var data2=this.tripDetails[counter-1].destination;
             this.tripDetails[counter]={
                 startPoint : data1,
                 destination : data2
             };

         }
         this.tripDetails[rowCounter+1].destination= "";
         this.tripDetails[rowCounter+2].startPoint= "";
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
			this.tripDetails.splice(index,1);
			this.tripDetails[index].destination= destination;	
		}
	}


}
