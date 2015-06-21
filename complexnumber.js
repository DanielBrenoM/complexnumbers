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
   	var fullComplex = /([-+]?\d+\.?\d*|[-+]?\d*\.?\d+)\s*([-+])?\s*([-+]?\d+\.?\d*|[-+]?\d*\.?\d+)/.exec(input),
   	    imaginary = /(^[+-]?\d+i)/.exec(input),
        real = /([+-]?\d+)/.exec(input),
        complexI = /([+-]?\d+)\s*([-+])?\s*i/.exec(input);

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
function complexSub(first,second)
{
   var a = newComplex(first),
       b = newComplex(second),
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
function complexDiv(first,second)
{
   var a = newComplex(first),
       b = newComplex(second),
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
function complexExpForm(input)
{
   var a = newComplex(input),
       angulus = Math.atan2(a.imag,a.real),
       Mod = complexMod(input),
       rep = Mod + "*e^(i " + angulus + ")";
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
       signal = (angulus>=0 ? "+" : "")
       logLiteral = Math.log(r) + signal + angulus + "i";
       return String(logLiteral);
}
function complexLog(input,base)
{
   var a = newComplex(input),
       logA = complexLogN(input),
       logBase = Math.log(base),
       log = String(logA) + "\n" + "_________________________________________" + "\n" + String(logBase);
       //log = complexDiv(logA,logBase);
       return log;
}
function complexTgh(input)
{
  var tgZ = complexTan(input),
      tgH = "-i*" + String(tgZ);
      //tgH = complexMult("-1i",tgZ);
      return tgH;
}
function complexSinh(input)
{
  var argument = complexMult(input,"1i"),
      sin = complexSin(argument),
      sinh = "-i*" + String(sin);
      //sinh = complexMult("-1i",sin);
      return sinh;
}
function complexCosh(input)
{
  var argument = complexMult(input,"1i"),
      cosh = complexCos(argument);
      return String(cosh);
}
function complexSinIn(input)
{
  var mult = complexMult(input,input),
      sub = complexSub("1",mult),
      argument = complexsquareRoot(sub),
      argument2 = complexMult("1i",input),
      argument3 = complexSum(argument,argument2),
      log = complexLogN(argument3),
      sinIn = complexMult("-1",log);
      return sinIn;
}
function complexCosIn(input)
{
  var mult = complexMult(input,input),
      sum = complexSum(mult,"1"),
      squareroot = complexsquareRoot(sum),
      argument = complexSum(input,squareroot),
      cosIn = complexLogN(argument);
      return cosIn;
}
function complexTgIn(input)
{
  var sum = complexSum("1",input),
      sub = complexSub("1",input),
      div = complexDiv(sum,sub),
      log = complexLogN(div);
      //return String("1/2*(") + log + String(")");
      return complexMult(1/2,log);
}

numComplex.prototype.complexSum = function(second)
{
   var a = this,
       b = new newComplex(second),
       r = a.real + b.real,
       i = a.imag + b.imag;
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
numComplex.prototype.complexMult = function(second)
{
   var a = this,
       b = new newComplex(second),
       r = a.real*b.real - (a.imag*b.imag),
       i = a.real*b.imag + a.imag*b.real;
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
numComplex.prototype.complexMod = function()
{
   var Mod = Math.hypot(this.real,this.imag);
       return Mod;
}
numComplex.prototype.complexExpForm = function()
{
  var angulus = Math.atan2(this.imag,this.real),
      Mod = Math.hypot(this.real,this.imag),
      rep = Mod + "*e^(i " + angulus + ")";
      return rep;
}
numComplex.prototype.complexSin = function()
{
   var sin = this.imag/ Math.hypot(this.real,this.imag);
   return sin;
}
numComplex.prototype.complexCos = function()
{
  var cos = this.real / Math.hypot(this.real,this.imag);
  return cos;
}
numComplex.prototype.complexTan = function()
{
  var tan = (this.imag/Math.hypot(this.real,this.imag)) / (this.real / Math.hypot(this.real,this.imag));
  return tan;
}
numComplex.prototype.complexsquareRoot = function()
{
  var mod = Math.hypot(this.real,this.imag),
      angulus = Math.atan2(this.imag,this.real),
      squareRoot = Math.sqrt(mod) + "* e^(i" + angulus + "+ k*pi)";
      return squareRoot;
}
numComplex.prototype.complexExp = function()
{
  var ExpLiteral = "e^" + this.real + "(cos" + this.imag + "+isen" + this.imag + ")\n";
      ExpValue =  Math.exp(this.real)*(Math.cos(this.imag)+Math.sin(this.imag)) + "i";
      return String(ExpLiteral) + " " + String(ExpValue);
}
numComplex.prototype.complexLogN = function()
{
  var angulus = Math.atan2(this.imag,this.real),
      r = Math.hypot(this.real,this.imag),
      signal = (angulus>=0 ? "+" : "")
      logLiteral = Math.log(r) + signal + angulus + "i";
      return String(logLiteral);
}
numComplex.prototype.complexLog = function(base)
{
  var angulus = Math.atan2(this.imag,this.real),
      r = Math.hypot(this.real,this.imag),
      signal = (angulus>=0 ? "+" : "")
      logLiteral = Math.log(r) + signal + angulus + "i"; 
      logBase = Math.log(base),
      log = String(logLiteral) + "\n" + "_________________________________________" + "\n" + String(logBase);
    //log = complexDiv(logLiteral,logBase);
       return log;
}
numComplex.prototype.complexTgh = function()
{
  var tgZ = (this.imag/Math.hypot(this.real,this.imag)) / (this.real / Math.hypot(this.real,this.imag));
      tgH = "-i*" + String(tgZ);
      //tgH = complexMult("-1i",tgZ);
      return tgH;
}
numComplex.prototype.complexSinh = function()
{
  var argument = this.complexMult("1i"),
      sin = complexSin(argument),
      sinh = "-i*" + String(sin);
    //sinh = complexMult("-1i",sin);
      return sinh;
}
numComplex.prototype.complexCosh = function()
{
  var argument = this.complexMult("1i"),
  cosh = complexCos(argument);
  return String(cosh);
}
numComplex.prototype.complexSinIn = function()
{
  var r = this.real*this.real - (this.imag*this.imag),
      i = this.real*this.imag + this.imag*this.real;
      mult = numComplex(r,i),
      sub = complexSub("1",mult),
      argument = complexsquareRoot(sub),
      argument2 = this.complexMult("1i"),
      argument3 = complexSum(argument,argument2),
      log = complexLogN(argument3),
      sinIn = complexMult("-1",log);
      return sinIn;
}