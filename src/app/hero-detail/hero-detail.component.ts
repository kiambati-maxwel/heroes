import { Component, OnInit, Input } from '@angular/core';

// import the interface
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent implements OnInit {
  // communicate with child
  @Input() hero: Hero | undefined;

  constructor() {}

  ngOnInit(): void {}
}
