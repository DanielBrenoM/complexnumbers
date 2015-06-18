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
function complexExpForm(input)
{
   var a = newComplex(input),
       angulus = Math.atan2(a.imag,a.real),
       Mod = complexMod(input),
       rep = Mod + "*" + "e^" + "(i " + angulus + ")";
       return rep;
}
function complexSin(input)
{
   var a = newComplex(input),
       sin = a.imag / complexMod(input);
       return sin;
}
function complexCos(input)
{
   var a = newComplex(input)
       cos = a.real / complexMod(input);
       return cos;
}
function complexTan(input)
{
   var a = complexSin(input),
       b = complexCos(input),
       tan = a/b;
       return tan;
}
function complexsquareRoot(input)
{
   var a = newComplex(input),
       mod = complexMod(input),
       angulus = Math.atan2(a.imag,a.real),
       squareRoot = Math.sqrt(mod) + "* e^(i" + angulus + "+ k*pi)";
       return squareRoot;
}
function complexExp(input)
{
   var a = newComplex(input),
       ExpLiteral = "e^" + a.real + "(cos" + a.imag + "+isen" + a.imag + ")\n";
       ExpValue =  Math.exp(a.real)*(Math.cos(a.imag)+Math.sin(a.imag)) + "i";
       return String(ExpLiteral) + " " + String(ExpValue);
}
function complexLogN(input)
{
   var a = newComplex(input),
       angulus = Math.atan2(a.imag,a.real),
       r = complexMod(input),
       logLiteral = Math.log(r) + " + i" + angulus +"\n";
       logValue = (Math.log(r) + angulus) + "i";
       return String(logLiteral) + " " + String(logValue);
}
function complexLog(input,base)
{
   var a = newComplex(input),
       logA = complexLogN(input),
       
}