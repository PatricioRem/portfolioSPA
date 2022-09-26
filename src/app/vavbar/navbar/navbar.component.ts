import { Component, OnInit } from '@angular/core';
import { ProfiledataService } from 'src/app/services/profiledata.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  miPortfolio:any
  constructor(private datosPortfolio:ProfiledataService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      console.log(data);
      this.miPortfolio=data;
    });
  }

}
