import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-top',
  imports: [CommonModule],
  templateUrl: './scroll-top.component.html',
  styleUrl: './scroll-top.component.scss'
})
export class ScrollTopComponent implements OnInit{


  ngOnInit(): void {
    
  }

  constructor(@Inject(DOCUMENT) private document: Document) { }
  windowScrolled: boolean=false;

  
  @HostListener("window:scroll", [])

  onWindowScroll() {
    if (window.pageYOffset > 100) {
      this.windowScrolled = true;
    } else {
      this.windowScrolled = false;
    }
  }

  public scrollToTop() :void{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'  
    });
  }

}
