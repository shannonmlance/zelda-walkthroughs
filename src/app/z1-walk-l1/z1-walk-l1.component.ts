import { Component, OnInit, AfterContentInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-z1-walk-l1',
  templateUrl: './z1-walk-l1.component.html',
  styleUrls: ['./z1-walk-l1.component.css']
})
export class Z1WalkL1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    $.getScript("/assets/js/script.js", function() {
    });
  }

}
