import { Component, OnInit } from '@angular/core';
import { DataFirebaseService } from 'src/app/services/data-firebase.service';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent implements OnInit {

  constructor(public dataService: DataFirebaseService) { }

  ngOnInit(): void {
  }

}
