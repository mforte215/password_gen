import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  password = '';
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  passwordLength = 0;


  onButtonCLick() {


    const numbers = '0123456789';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()-';
    let validChars = '';

    if(this.includeLetters)
    {
      validChars += letters;
    }
    if(this.includeNumbers)
    {
      validChars += numbers;
    }
    if(this.includeSymbols)
    {
      validChars += symbols;
    }

    let generatedPassword = '';

    for(let i = 0; i < this.passwordLength; i++)
    {

      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];

    }


   this.password = generatedPassword;


  }

  onChangeUseLetters()
  {

    this.includeLetters = !this.includeLetters;

  }

  onChangeUseNumbers()
  {

    this.includeNumbers = !this.includeNumbers;

  }

  onChangeUseSymbols()
  {

    this.includeSymbols = !this.includeSymbols;

  }

  onChangeLength(lengthOfPassword : string)
  {

    const parsedValue = parseInt(lengthOfPassword);
    if(!isNaN(parsedValue))
    {
      this.passwordLength = parsedValue;
    }
    
  }


}
