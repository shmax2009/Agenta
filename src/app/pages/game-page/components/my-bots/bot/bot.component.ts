import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-bot',
  templateUrl: './bot.component.html',
  styleUrls: ['./bot.component.scss']
})
export class BotComponent implements OnInit {
  @Input() name = 'ElMishucha';
  @Input() language = 'C++';
  @Input() date = '3 days ago';
  @Input() isValidate: boolean = false;
  @Input() isChecked: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

}
