import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-capicua-checker',
  templateUrl: './capicua-checker.component.html',
  styleUrls: ['./capicua-checker.component.css'],
  standalone: true,
  imports:[FormsModule, CommonModule]
})
export class CapicuaCheckerComponent {
  inputNumber: string = '';
  isCapicua: boolean = false;

  checkCapicua(): void {
    const reversedNumber = this.inputNumber.split('').reverse().join('');
    this.isCapicua = this.inputNumber === reversedNumber;
  }
}

