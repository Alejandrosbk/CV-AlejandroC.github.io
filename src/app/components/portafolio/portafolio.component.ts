import { Component, OnInit } from '@angular/core';
import { DataFirebaseService } from 'src/app/services/data-firebase.service';
@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {


  constructor(public dataService: DataFirebaseService) { }

  ngOnInit(): void {
  }

}
