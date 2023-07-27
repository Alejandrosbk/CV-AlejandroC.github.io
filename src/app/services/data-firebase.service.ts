import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PersonalInfo } from '../interfaces/personal-information';

@Injectable({
  providedIn: 'root'
})
export class DataFirebaseService {

  info: PersonalInfo = {};
  personaldata: any[] = [];
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
    this.http.get('assets/data/personal-information.json').subscribe({
      next: (resp: PersonalInfo) => {
        this.info = resp;
        // console.log(resp);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  private CargarProfesional() {
    this.http.get('https://cv-alejandroc-default-rtdb.firebaseio.com/Profesional.json').subscribe({
      next: (resp: any) => {
        this.profesional = resp;
        // console.log(resp);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  private CargarEducacion(){
    this.http.get('https://cv-alejandroc-default-rtdb.firebaseio.com/Educacion.json').subscribe({
      next: (resp: any) => {
        this.educacion = resp;
        // console.log(resp);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  private CargarTestimonio(){
    this.http.get('https://cv-alejandroc-default-rtdb.firebaseio.com/Testimonios.json').subscribe({
      next: (resp: any) => {
        this.testimonio = resp;
        // console.log(resp);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  private CargarExperiencia(){
    this.http.get('https://cv-alejandroc-default-rtdb.firebaseio.com/Experiencia.json').subscribe({
      next: (resp: any) => {
        this.experiencia = resp;
        // console.log(resp);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  private CargarServicios(){
    this.http.get('https://cv-alejandroc-default-rtdb.firebaseio.com/Servicios.json').subscribe({
      next: (resp: any) => {
        this.servicios = resp;
        // console.log(resp);
      }, 
      error: (error) => {
        console.log(error);
      }
    });
  }
}
