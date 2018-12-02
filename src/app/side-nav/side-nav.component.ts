import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  constructor() { }

  topicList = [
    { title: 'Introduction', path: '/introduction', isSelected: false },
    { title: 'Components', path: '/components', isSelected: false },
    { title: 'Modules', path: '/modules', isSelected: false },
    { title: 'Template', path: '/template', isSelected: false },
    { title: 'Directives', path: '/directives', isSelected: false },
    { title: 'Pipes', path: '/pipes', isSelected: false },
    { title: 'Routing', path: '/routing', isSelected: false },
    { title: 'Component Interaction', path: '/componentinteraction', isSelected: false },
    { title: 'Forms', path: '/forms', isSelected: false },
  ];

  ngOnInit() {
    const index = Number(localStorage.getItem('selectedIndex'));
    this.chnageActiveIndex(index);
  }

  chnageActiveIndex(index) {
    localStorage.setItem('selectedIndex', index);
    this.topicList.forEach( (key, i) => {
      if ( index === i ) {
        key.isSelected = true;
      } else {
        key.isSelected = false;
      }
    });
  }
}
