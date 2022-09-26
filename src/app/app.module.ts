import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Route } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { TareasComponent } from './tareas/tareas/tareas.component';
import { NavbarComponent } from './vavbar/navbar/navbar.component';
import { ModalComponent } from './modal/modal/modal.component';
import { EduComponent } from './edu/edu/edu.component';
import { ExperienciaComponent } from './experiencia/experiencia/experiencia.component';
import { SkillsComponent } from './skills/skills/skills.component';
import { ProyectosComponent } from './proyectos/proyectos/proyectos.component';
import { ContactoComponent } from './contacto/contacto/contacto.component';
import { LoginComponent } from './login/login/login.component';

const routes: Route[] = [
/*   {path: '', component: AppComponent},
 */   {path: 'skills', component: SkillsComponent},
      {path: 'edu', component: EduComponent},
      {path: 'experiencia', component: ExperienciaComponent},
      {path: 'contacto', component: ContactoComponent}
 
 
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TareasComponent,
    NavbarComponent,
    ModalComponent,
    EduComponent,
    ExperienciaComponent,
    SkillsComponent,
    ProyectosComponent,
    ContactoComponent,
    LoginComponent
    
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
