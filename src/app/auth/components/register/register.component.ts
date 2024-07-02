import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
 

  selectIndex: number = 0;
  selectItem: number = 0;

  onNextCard(): void {
    this.selectIndex++;

  }

  onPrevCard(): void {
    this.selectIndex--;
  }

  onClickItem1(): void {
    this.selectItem = 0;
  }

  onClickItem2(): void {
    this.selectItem = 1;
  }
}
