import { Component, OnInit, AfterContentInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-z1-walk-l2',
  templateUrl: './z1-walk-l2.component.html',
  styleUrls: ['./z1-walk-l2.component.css']
})
export class Z1WalkL2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    $.getScript("/assets/js/script.js", function() {
    });
  }

}
