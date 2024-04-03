import { Component, Input } from '@angular/core';
import { HttpClientService } from '../http-client.service';

@Component({
  selector: 'app-missiondetails',
  standalone: true,
  imports: [],
  templateUrl: './missiondetails.component.html',
  styleUrl: './missiondetails.component.css'
})

export class MissiondetailsComponent {
  @Input() flightNum:number=20;
  missionDetails:any = null

  constructor(private  http:HttpClientService) {
    http.getDetailsByFlightNum(this.flightNum)
      .subscribe((data)=>{
          this.missionDetails=data
      })
  }
}
