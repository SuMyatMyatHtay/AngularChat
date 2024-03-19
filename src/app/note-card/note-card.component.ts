import { Component, OnInit, ViewChild, ElementRef, Renderer2, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent implements OnInit {

  @Input() title!: string;
  @Input() body!: string;

  @ViewChild('truncator') truncator!: ElementRef<HTMLElement>;
  @ViewChild('bodyText') bodyText!: ElementRef<HTMLElement>;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {

  }

  truncateBodyText(): void {
    // work out if there is a text overflow, and if not then hife the truncator. 
    let style = window.getComputedStyle(this.bodyText.nativeElement, null);
    let viewableHeight = parseInt(style.getPropertyValue("height"), 10);

    if (this.bodyText.nativeElement.scrollHeight > viewableHeight) {
      //if there is a text overflow, show the fade out truncator
      this.renderer.setStyle(this.truncator.nativeElement, "display", "block");
    }
    else {
      //else (there is a text overflow), hide the fade out truncator. 
      this.renderer.setStyle(this.truncator.nativeElement, "display", "none");
    }

  }

  ngAfterViewInit(): void {
    this.truncateBodyText();
    console.log('Title:', this.title);
    console.log('Body:', this.body);
  }



}
