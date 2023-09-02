import { Component, OnInit } from '@angular/core';
import { DataFirebaseService } from 'src/app/services/data-firebase.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public dataService: DataFirebaseService, private toastr: ToastrService) { }

  ngOnInit(): void {
    // this.toastr.success('Bienvenido/a', 'Hola', {
    //   positionClass: 'toast-bottom-center',
    //   timeOut: 3000,
    // });
  }

  showAlert() {
    this.toastr.info('Próximamente disponible', '', {
      positionClass: 'toast-bottom-center',
      timeOut: 3000,
    });
  }
}
