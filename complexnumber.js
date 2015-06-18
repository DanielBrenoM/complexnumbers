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
   
function numComplex(x,y)
{
      this.real = x;
      this.imag = y;
      this.signal = (y>=0 ? "+" : "");
      this.eq = String(x) + this.signal + String(y) + "i";   
      return this.eq;   
}
function newComplex(input)
{
   	var fullComplex = /([+-]?\d+)\s*([+-])?\s*([+-]?\d+)i/.exec(input);
   	var imaginary = /(^[+-]?\d+i)/.exec(input);
      var real = /([+-]?\d+)/.exec(input);
      var complexI = /([+-]?\d+)\s*([-+])?\s*i/.exec(input);

      if(typeof input == "number")
      {
         var temp = new numComplex(input,0);
         return temp;
      }
      else if(typeof input == "string" && fullComplex)
      {
         if(fullComplex[2]=="-") fullComplex[3]= -parseFloat(fullComplex[3]);
         var temp = new numComplex(parseFloat(fullComplex[1]),parseFloat(fullComplex[3])); 
         return temp;         
      }
      else if(typeof input == "string" && imaginary)
      {
         if(imaginary[0]=="-") imaginary[1]=-parseFloat(imaginary[1]);
         var temp = new numComplex(0,parseFloat(imaginary[1]));
         return temp;
      }
      else if(typeof input == "string" && real && !imaginary && !complexI && !fullComplex)
      {
         var temp = new numComplex(parseFloat(real[1]),0);
         return temp;
      }
      else if(typeof input == "string" && complexI &&  !imaginary && !fullComplex && !real)
      {
         var i = (complexI[1]=="-"? -1: 1)
         var temp = new numComplex(complexI[1],parseFloat(i));
         return temp;
      }
}
function complexSum(first,second)
{      
      var a = newComplex(first),
          b = newComplex(second),
          r = a.real + b.real,
          i = a.imag + b.imag;
          return numComplex(r,i);
}
numComplex.prototype.complexSum = function(second)
{
   var a = this,
       b = new newComplex(second),
       r = a.real + b.real,
       i = a.imag + b.imag;
       return numComplex(r,i);
}
function complexSub(first,second)
{
   var a = newComplex(first),
       b = newComplex(second),
       r = a.real - b.real,
       i = a.imag - b.imag;
       return numComplex(r,i);
}
numComplex.prototype.complexSub = function(second)
{
   var a = this,
       b = new newComplex(second),
       r = a.real - b.real,
       i = a.imag - b.imag;
       return numComplex(r,i);
}
function complexMult(first,second)
{
   var a = newComplex(first),
       b = newComplex(second),
       r = a.real*b.real - (a.imag*b.imag),
       i = a.real*b.imag + a.imag*b.real;
       return numComplex(r,i);
}
numComplex.prototype.complexMult = function(second)
{
   var a = this,
       b = new newComplex(second),
       r = a.real*b.real - (a.imag*b.imag),
       i = a.real*b.imag + a.imag*b.real;
       return numComplex(r,i);
}
function complexDiv(first,second)
{
   var a = newComplex(first),
       b = newComplex(second),
       r = (a.real*b.real + a.imag*b.imag)/(b.real*b.real+b.imag*b.imag),
       i = (a.imag*b.real + a.real*b.imag)/(b.real*b.real+b.imag*b.imag);
       return numComplex(r,i);
}
numComplex.prototype.complexDiv = function(second)
{
   var a = this,
       b = new newComplex(second),
       r = (a.real*b.real + a.imag*b.imag)/(b.real*b.real+b.imag*b.imag),
       i = (a.imag*b.real + a.real*b.imag)/(b.real*b.real+b.imag*b.imag);
       return numComplex(r,i);
}
function complexMod(input)
{
   var a = newComplex(input),
       Mod = Math.hypot(a.real,a.imag);
       return Mod;    
}
numComplex.prototype.complexMod = function()
{
   var Mod = Math.hypot(this.real,this.imag);
       return Mod;
}