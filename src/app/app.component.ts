import { Component } from '@angular/core';
import {sdk} from './rainbow/sdk';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rainbow-prod-test';
  version = sdk.version();
  
}
