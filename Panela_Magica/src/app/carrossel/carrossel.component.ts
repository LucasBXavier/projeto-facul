import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-carrossel',
  templateUrl: './carrossel.component.html',
  styleUrls: ['./carrossel.component.css']
})
export class CarrosselComponent implements OnInit, OnDestroy {
  images = [
    { src: "assets/image/fricasse.jpg", alt: "Fricassé" },
    { src: "assets/image/hamburguer.jpg", alt: "Hambúrguer" },
    { src: "assets/image/strogonoff.jpg", alt: "Strogonoff" },
    { src: "assets/image/brownie.jpg", alt: "brownie"},
    {src: "assets/image/bolo_cenoura.jpg", alt: "bolo de cenoura"}
  ];
  currentIndex = 0;
  interval: any;

  constructor() { }

  ngOnInit(): void {
    this.startAutoSlide();
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  startAutoSlide(): void {
    this.interval = setInterval(() => {
      this.nextSlide();
    }, 8000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
