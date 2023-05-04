import { Component, Input } from '@angular/core';
import { KeyValuePipe } from '@angular/common';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
})
export class TimelineComponent {
  @Input() jobs: any[] = [];
}
