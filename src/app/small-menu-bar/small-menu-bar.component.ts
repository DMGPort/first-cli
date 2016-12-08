import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'small-menu-bar',
  templateUrl: './small-menu-bar.component.html',
  styleUrls: ['./small-menu-bar.component.css']
})
export class SmallMenuBarComponent {

    @Input() isOpen = true;
    @Output() opened = new EventEmitter();
    @Output() closed = new EventEmitter();

    toggle() {
        this.isOpen = !this.isOpen;
        this.isOpen ? this.opened.emit() : this.closed.emit();
    }
}