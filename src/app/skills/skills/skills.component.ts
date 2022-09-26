import { Component, OnInit } from '@angular/core';
import { ProfiledataService } from 'src/app/services/profiledata.service';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  frontEndList:any;
  backEndList:any;
  constructor(private datosPortFolio:ProfiledataService ) { }

  ngOnInit(): void {
    this.datosPortFolio.obtenerDatos().subscribe(data=>{
      this.frontEndList = data.frontEnd; 
      this.backEndList = data.backEnd
    })
  }

}
