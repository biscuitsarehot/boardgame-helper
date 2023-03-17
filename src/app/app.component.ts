import { Component, OnInit } from '@angular/core';
import { BggApiService } from './services/bgg-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'boardgame-helper';
  public test: any;

  constructor(private bggApiService: BggApiService) {}

  public ngOnInit(): void {
      this.test = this.bggApiService.getUserCollection('biscuitsarehot');
  }
}
