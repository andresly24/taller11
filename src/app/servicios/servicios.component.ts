import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecursosService } from './recursos.service';
import { HttpClientModule } from '@angular/common/http';
import { Foto } from '../interfaz/foto';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HttpClientModule,RouterLink],
  providers: [RecursosService],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {
  title = 'clientAngular';
  fotos: Foto [] = [];
  constructor(private recursosService: RecursosService) {
    recursosService.datos().subscribe(respuesta => {
      this.fotos = respuesta as Array<Foto>
    })
  }
}
