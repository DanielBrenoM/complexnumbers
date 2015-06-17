/* Copyright 2015 Daniel Breno Menezes <danielbrenom@gmail.com>

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
   */
   function numComplex(x,y)   {
      this.real = x;
      this.imag = y;
      this.signal = (y>=0 ? "+" : "");
      this.eq = String(x) + this.signal + String(y) + "i";
   }
   function searchComplex(input)
   {
   	var fullComplex = /([+-]?\d+)\s*([+-])?\s*([+-]?\d+)i/.exec(input);
   	var imaginary = /(^s*[+-]?\d+i)/.exec(input);
      var real = /([+-]?\d+)/.exec(input);
      var complexI = /([-+]?\d*)\s*([-+])?\s*i/.exec(input);

      if(typeof input == "number")
      {
         var temp = new numComplex(input,0);      
         return temp.eq;
      }
      else if(typeof input == "string" && fullComplex)
      {
         var temp = new numComplex(parseFloat(fullComplex[1]),parseFloat(fullComplex[3]));        
         return temp.eq;            
      }
      else if(typeof input == "string" && imaginary)
      {
         var temp = new numComplex(0,parseFloat(imaginary[1]));
         return temp.eq;
      }
      else if(typeof input == "string" && real && !imaginary && !complexI && !fullComplex)
      {
         var temp = new numComplex(parseFloat(real[1]),0);
         return temp.eq;
      }
      else if(typeof input == "string" && complexI &&  !imaginary && !fullComplex)
      {
         var temp = new numComplex(complexI[1],"");
         return temp.eq;
      }
   }

   