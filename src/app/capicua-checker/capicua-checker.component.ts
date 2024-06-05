import { Component } from '@angular/core';

@Component({
  selector: 'app-capicua-checker',
  templateUrl: './capicua-checker.component.html',
  styleUrls: ['./capicua-checker.component.css']
})
export class CapicuaCheckerComponent {
  inputNumber: string = '';
  isCapicua: boolean = false;

  checkCapicua(): void {
    const reversedNumber = this.inputNumber.split('').reverse().join('');
    this.isCapicua = this.inputNumber === reversedNumber;
  }
}

