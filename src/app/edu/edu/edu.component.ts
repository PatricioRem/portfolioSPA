import { Component, OnInit } from '@angular/core';
import { ProfiledataService } from 'src/app/services/profiledata.service';
@Component({
  selector: 'app-edu',
  templateUrl: './edu.component.html',
  styleUrls: ['./edu.component.css']
})
export class EduComponent implements OnInit {
  eduList:any;
  constructor(private datosPortFolio:ProfiledataService ) { }

  ngOnInit(): void {
    this.datosPortFolio.obtenerDatos().subscribe(data=>{
      this.eduList = data.education;
    })
  }

}
