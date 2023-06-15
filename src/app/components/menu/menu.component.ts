import { Component, OnInit } from '@angular/core';
import { Usuario } from '../login/login.component';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {
  usuario: Usuario

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.usuario = JSON.parse(localStorage.getItem("profile")) as Usuario
        console.log(this.usuario)
      }
    })
  }

  logout() {
    localStorage.removeItem("profile")
    this.router.navigate(["/home"])
  }

}
