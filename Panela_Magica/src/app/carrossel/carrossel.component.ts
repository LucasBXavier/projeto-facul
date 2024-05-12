import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-carrossel',
  templateUrl: './carrossel.component.html',
  styleUrls: ['./carrossel.component.css']
})
export class CarrosselComponent implements OnInit {
  @ViewChild('slidesContainer') slidesContainer!: ElementRef;
  slides: any[] = []; // Adicione seus slides aqui
  currentIndex = 0;
  slideshowTimeout: any;

  constructor() { }

  ngOnInit(): void {
    this.showSlides();
  }

  showSlides(): void {
    this.currentIndex++;
    this.showCurrentSlide();
    this.slideshowTimeout = setTimeout(() => this.showSlides(), 8000);
  }

  showCurrentSlide(): void {
    const slides = this.slidesContainer.nativeElement.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    if (this.currentIndex > slides.length) { this.currentIndex = 1; }
    else if (this.currentIndex < 1) { this.currentIndex = slides.length; }
    slides[this.currentIndex - 1].style.display = "block";
  }

  plusSlides(n: number): void {
    this.currentIndex += n;
    this.showCurrentSlide();
  }

  onMouseOver(): void {
    clearTimeout(this.slideshowTimeout);
  }

  onMouseOut(): void {
    this.showSlides();
  }

  ngOnDestroy(): void {
    clearTimeout(this.slideshowTimeout);
  }
}
