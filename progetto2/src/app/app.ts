import { Component, effect, resource, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule, JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FooComponent } from './foo/foo';


@Component({
  selector: 'app-root',
  imports: [FooComponent,RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
 
}
