import { Component, AfterContentInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentInit {
  title = 'zelda-app';
  ngAfterContentInit() {
    $.getScript("/assets/js/script.js", function () {
    });
  }
}
