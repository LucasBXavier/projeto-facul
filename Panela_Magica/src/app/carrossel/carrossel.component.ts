import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {
  slideIndex = 0;
  slides: any[] = []; // Adicione seus slides aqui
  currentIndex = 0;
  slideshowTimeout: any;

  constructor() { }

  ngOnInit(): void {
    this.showSlides();
  }

  showSlides(): void {
    this.slideIndex++;
    this.showCurrentSlide();
    this.slideshowTimeout = setTimeout(() => this.showSlides(), 8000);
  }

  showCurrentSlide(): void {
    const slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    if (this.slideIndex > slides.length) { this.slideIndex = 1; }
    else if (this.slideIndex < 1) { this.slideIndex = slides.length; }
    this.currentIndex = this.slideIndex - 1;
  }

  plusSlides(n: number): void {
    this.slideIndex += n;
    this.showCurrentSlide();
  }

  onMouseOver(): void {
    clearTimeout(this.slideshowTimeout);
  }

  onMouseOut(): void {
    this.showSlides();
  }
}
