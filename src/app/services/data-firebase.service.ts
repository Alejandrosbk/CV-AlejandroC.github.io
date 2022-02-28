import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PersonalInformation } from '../interfaces/personal-information';
@Injectable({
  providedIn: 'root'
})
export class DataFirebaseService {

  info: PersonalInformation = {};
  profesional: any[] = [];
  educacion: any[] = [];
  testimonio: any[] = [];
  experiencia: any[] = [];
  servicios: any[] = [];

  constructor(private http: HttpClient) {
    this.personalInfo();
    this.CargarProfesional();
    this.CargarEducacion();
    this.CargarTestimonio();
    this.CargarExperiencia();
    this.CargarServicios();
  }

  private personalInfo() {
    this.http.get('../../assets/data/personal-information.json')
    .subscribe( (res: PersonalInformation) => {
      this.info = res;
      // console.log(res);
    });
  }

  private CargarProfesional(){
    this.http.get('https://cv-alejandroc-default-rtdb.firebaseio.com/Profesional.json')
      .subscribe((resp: any) => {
        this.profesional = resp;
        // console.log(resp);
    });
  }

  private CargarEducacion(){
    this.http.get('https://cv-alejandroc-default-rtdb.firebaseio.com/Educacion.json')
      .subscribe((resp: any) => {
        this.educacion = resp;
        // console.log(resp);
    });
  }

  private CargarTestimonio(){
    this.http.get('https://cv-alejandroc-default-rtdb.firebaseio.com/Testimonios.json')
      .subscribe((resp: any) => {
        this.testimonio = resp;
        // console.log(resp);
    });
  }

  private CargarExperiencia(){
    this.http.get('https://cv-alejandroc-default-rtdb.firebaseio.com/Experiencia.json')
      .subscribe((resp: any) => {
        this.experiencia = resp;
        // console.log(resp);
    });
  }

  private CargarServicios(){
    this.http.get('https://cv-alejandroc-default-rtdb.firebaseio.com/Servicios.json')
      .subscribe((resp: any) => {
        this.servicios = resp;
        // console.log(resp);
    });
  }
}
