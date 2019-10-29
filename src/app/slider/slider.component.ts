import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  constructor() { }

  carouselOptions = {
    margin: 10,
    nav: false,
    autoWidth: true,
    loop: false,
    dots: false,
    // tslint:disable-next-line:max-line-length
    navText: ['<div class=\'nav-btn prev-slide\'></div>', '<div class="show-more">Show more <i class="fa fa-chevron-right"></i></div>'],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      480: {
        items: 2,
        nav: true
      },
      1000: {
        items: 3,
        nav: true,
        loop: false
      },
      1500: {
        items: 4,
        nav: true,
        loop: false
      }
    }
  };

  images = [
    {
      text: 'Everfresh Flowers',
      image: 'assets/clothes/clothe1.jpg',
      width: '200px',
      price: '$ 1522',
      fixed: 'FIXED PRICE'
    },
    {
      text: 'Festive Deer',
      image: 'assets/clothes/clothe1.jpg',
      width: '150px',
      price: '$ 1522',
      fixed: 'AUCTION'
    },
    {
      text: 'Morning Greens',
      image: 'assets/clothes/clothe1.jpg',
      width: '200px',
      price: '$ 1522',
      fixed: 'FIXED PRICE'
    },
    {
      text: 'Bunch of Love',
      image: 'assets/clothes/clothe1.jpg',
      width: '150px',
      price: '$ 1522',
      fixed: 'FIXED PRICE'
    },
    {
      text: 'Blue Clear',
      image: 'assets/clothes/clothe1.jpg',
      width: '200px',
      price: '$ 1522',
      fixed: 'FIXED PRICE'
    },
    {
      text: 'Evening Clouds',
      image: 'assets/clothes/clothe1.jpg',
      width: '150px',
      price: '$ 1522',
      fixed: 'FIXED PRICE'
    },
    {
      text: 'Fontains in Shadows',
      image: 'assets/clothes/clothe1.jpg',
      width: '200px',
      price: '$ 1522',
      fixed: 'FIXED PRICE'
    },
    {
      text: 'Kites in the Sky',
      image: 'assets/clothes/clothe1.jpg',
      width: '150px',
      price: '$ 1522',
      fixed: 'FIXED PRICE'
    },
    {
      text: 'Sun Streak',
      image: 'assets/clothes/clothe1.jpg',
      width: '200px',
      price: '$ 1522',
      fixed: 'FIXED PRICE'
    }
  ];

  ngOnInit() {
  }

}
