import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  @Input() clazzes: string[] = [];
  @Input() title: string ="";

  @Output() select = new EventEmitter<string>();

  selectedClazz(clazzName :string):void{
    this.select.emit(clazzName);
  }

}
