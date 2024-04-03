import { Component } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { Interface } from 'readline';
import { Observable } from 'rxjs';
import { MissiondetailsComponent } from '../missiondetails/missiondetails.component';

@Component({
  selector: 'app-missionlist',
  standalone: true,
  imports: [MissiondetailsComponent],
  templateUrl: './missionlist.component.html',
  styleUrl: './missionlist.component.css',
  
})

export class MissionlistComponent {
  public missionList: any[] = [];
  constructor(private httpClient:HttpClientService){
    httpClient.getspacexlaunches().subscribe((data) => {
      this.missionList=data;
      console.log(this.missionList)
    });
  }

  
}
