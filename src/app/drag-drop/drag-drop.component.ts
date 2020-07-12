import { Component, OnInit, Input } from '@angular/core';
import { MarkdownService } from 'ngx-markdown';

@Component({
  selector: 'drag-drop, [drag-drop]',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.scss']
})
export class DragDropComponent implements OnInit {
  @Input()
  public content: string = "";

  constructor( private __markdownService: MarkdownService ) { }

  public ngOnInit() {
    this.__markdownService.renderer.heading = (text: string, level: number) => {
      return `<h${level} class="heading xl${Math.max(3 - level, 0)}">${text}</h${level}>`;
    };

    this.__markdownService.renderer.image = (href: string, title: string, text: string) => {
      switch (title) {
        case 'fas-icon':
        case 'fa-icon':
        case 'fa':
        case 'fas':
          return `<i class="fas ${href} xl"></i>`;
        case 'fab-icon':
        case 'fab':
          return `<i class="fab ${href} xl"></i>`;
        default:
          return `<img src="${href}" alt="${title}" title="${text}">`;
      }
    };
  }

  public getFileContent( files ): void {
    let fileReader = new FileReader();

    fileReader.onload = (e) => {
      this.content = fileReader.result as string;
    }
    fileReader.readAsText(files[0]);
  }

}
