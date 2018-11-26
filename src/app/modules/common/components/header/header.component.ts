import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'ozr-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() backLabel: string;

  @Output() back = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit() {
  }

  ////////////////////////////////////
  //    ACTIONS
  ////////////////////////////////////

  /**
   * On back action
   */
  onBack() {
    this.back.emit();
  }

}
