import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JsonPipe } from '@angular/common';

@Component({
 selector: 'app-foo',
 templateUrl: './foo.html',
 styleUrls: ['./foo.css'],
 imports: [JsonPipe]
})
export class FooComponent {
   data!: Object;
   loading: boolean = false;
   o!: Observable<Object>;
   constructor(public http: HttpClient) {}
   makeRequest(): void {
     console.log("here");
     this.loading = true;
     this.o = this.http.get('https://jsonplaceholder.typicode.com/posts/1');
     this.o.subscribe(this.getData);
   }
   getData = (d : Object) =>
   {
     this.data = d;
     this.loading = false;
   }
}
