import { Component, Input} from '@angular/core';
import { Unit } from '../http.service';

@Component({
  selector: 'app-header',
  templateUrl: "./header.component.html",
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Input() currentUnit!:Unit;

}
