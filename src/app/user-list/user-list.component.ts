import { Component, OnInit } from '@angular/core';
import { Usuario as User } from "../user/userClass/usuario";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users: User[];

  constructor() {
    this.users = [
      { nombre: 'Gabriela', apellido: 'Gonzales', edad: 23 },
      { nombre: 'Gabriela', apellido: 'Gonzales', edad: 23 },
      { nombre: 'Gabriela', apellido: 'Gonzales', edad: 23 },
      { nombre: 'Gabriela', apellido: 'Gonzales', edad: 23 },
    ];
  }

  ngOnInit(): void {}
}
