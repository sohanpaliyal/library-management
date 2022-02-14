import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-loader',
  templateUrl: './progress-loader.component.html',
  styleUrls: ['./progress-loader.component.scss']
})
export class ProgressLoaderComponent implements OnInit {

  constructor() { }

  loading = false;
  ngOnInit(): void {
  }

}
