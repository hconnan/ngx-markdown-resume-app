import { Directive, Output, Input, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[fileDragDrop]'
})
export class DragDropDirective {
  @Output()
  public onFileDropped = new EventEmitter<any>();

  @HostListener('dragover', ['$event'])
  public onDragOver(event) {
    event.preventDefault();
    event.stopPropagation();
  }

  @HostListener('dragleave', ['$event'])
  public onDragLeave(event) {
    event.preventDefault();
    event.stopPropagation();
  }

  @HostListener('drop', ['$event'])
  public ondrop(event) {
    event.preventDefault();
    event.stopPropagation();

    let files = event.dataTransfer.files;

    if (files.length > 0) {
      this.onFileDropped.emit(files)
    }
  }
}
