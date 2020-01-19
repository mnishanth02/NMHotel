import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { throwToolbarMixedModesError } from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  @Output() sideNavigationToggle = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  onToggleOpenSideNav() {
    this.sideNavigationToggle.emit();

  }

}
