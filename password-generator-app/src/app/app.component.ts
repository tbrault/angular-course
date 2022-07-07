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
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '#{[(!?@';

    let validateCharacters = '';
    let generatedPassword = '';

    if (this.isIncludedLetters) {
      validateCharacters += letters;
    }

    if (this.isIncludedNumbers) {
      validateCharacters += numbers;
    }

    if (this.isIncludedSymbols) {
      validateCharacters += symbols;
    }

    for (let i = 0; i < this.passwordLength; i++) {
      const index = Math.floor(Math.random() * validateCharacters.length);
      generatedPassword += validateCharacters[index];
    }

    this.password = generatedPassword;
  }
}
