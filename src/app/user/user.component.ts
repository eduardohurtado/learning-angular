import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  nombre: string;
  apellido: string;
  edad: number;

  constructor() {
    this.nombre = 'Eduardo';
    this.apellido = 'Hurtado';
    this.edad = 27;
  }

  ngOnInit(): void {}
}
