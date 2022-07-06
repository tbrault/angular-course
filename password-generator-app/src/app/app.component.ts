import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  password = '';
  isIncludedLetters = false;
  isIncludedNumbers = false;
  isIncludedSymbols = false;
  passwordLength = 0;

  onChangeLength(value: string): void {
    const parsedValue = parseInt(value);

    if (!isNaN(parsedValue)) {
      this.passwordLength = parsedValue;
    }
    console.log(this.passwordLength);
  }

  onChangeUseLetters(): void {
    this.isIncludedLetters = !this.isIncludedLetters;
  }

  onChangeUseNumbers(): void {
    this.isIncludedNumbers = !this.isIncludedNumbers;
  }

  onChangeUseSymbols(): void {
    this.isIncludedSymbols = !this.isIncludedSymbols;
  }

  generatePassword(): void {
    this.password = 'MY PASSWORD';
  }
}
