import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'tab-container',
  templateUrl: './tab-container.component.html',
  styleUrls: ['./tab-container.component.css']
})
export class TabContainerComponent implements OnInit {

  @Input()
  public headerTemplate!: TemplateRef<any>;
  constructor() { }

  ngOnInit(): void {
  }

}
