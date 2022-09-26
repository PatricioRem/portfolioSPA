import { Component, OnInit } from '@angular/core';
import { ProfiledataService } from 'src/app/services/profiledata.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  listaExp:any;
  constructor(private datosPortfolio:ProfiledataService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data=>{
      console.log(data);
      this.listaExp=data.experience[0];
    })
  }

}
