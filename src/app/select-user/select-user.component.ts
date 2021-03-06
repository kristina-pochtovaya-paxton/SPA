import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';

export interface IValuesArray {
  value: string
}

@Component({
  selector: 'app-select-user',
  templateUrl: './select-user.component.html',
  styleUrls: ['./select-user.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectUserComponent {
  @Input() control: FormControl;

  @Input() valuesArray: IValuesArray[];

  @Input() classLabel: string;

  @Input() id: string;

  @Input() textLabel: string;

  @Input() class: string;
}
