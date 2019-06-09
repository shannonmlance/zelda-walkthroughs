import { Component, OnInit, AfterContentInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-walkthroughs',
  templateUrl: './walkthroughs.component.html',
  styleUrls: ['./walkthroughs.component.css']
})
export class WalkthroughsComponent implements OnInit, AfterContentInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    $.getScript("/assets/js/script.js", function() {
    });
  }

}
