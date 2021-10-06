import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.page.html',
  styleUrls: ['./reportes.page.scss'],
})
export class ReportesPage implements OnInit {

  items: Array<any> = [
    {
      imagen: '../../../assets/img/bosa.jpg',
      lugar: 'Bogotá, Colombia',
      fecha:'12/03/2021',
      hora: '10:49 pm',
      descripcion: ''
    },
    {
      imagen: '../../../assets/img/bosa2.JPG',
      lugar: 'Cali, Colombia',
      fecha:'23/09/2021',
      hora: '9:29 am',
      descripcion: ''
    },
    {
      imagen: '../../../assets/img/chia.jpg',
      lugar: 'Buenaventura, Colombia',
      fecha:'01/10/2021',
      hora: '7:40 pm',
      descripcion: ''
    },
    {
      imagen: '../../../assets/img/patio-bonito.jpeg',
      lugar: 'Bogotá, Colombia',
      fecha:'10/04/2021',
      hora: '8:50 am',
      descripcion: ''
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
