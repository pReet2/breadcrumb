import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OneComponent } from '../one/one.component';
import { TwoComponent } from '../two/two.component';
import { ThreeComponent } from '../three/three.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dynamicComponent: any;
  fragment: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.dynamicComponent = OneComponent;
    this.route.fragment.subscribe((fragment: string) => {
      this.fragment = fragment;
      this.assignComponent(this.fragment);
    });
  }


  assignComponent(value){
    if(value === 'one')
        this.dynamicComponent = OneComponent;
      if(value === 'two')
        this.dynamicComponent = TwoComponent;
      if(value === 'three')
        this.dynamicComponent = ThreeComponent;
  }
}
