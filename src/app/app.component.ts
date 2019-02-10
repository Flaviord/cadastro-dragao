import { Component, OnInit } from '@angular/core';
import { DragonService } from './services/dragon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  constructor(private service: DragonService) {}

  ngOnInit() {
    this.service.listDragons().subscribe(res => console.log(res));
  }
}
