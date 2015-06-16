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
   
   function searchComplex(number)
   {
   	var fullcomplex = /([+-]?\d+)\s*([+-])?\s*([+-]?\d+)i/.exec(number);
   	var imaginary = /(^s*[+-]?\d+i)/.exec(number);
   }




   function numComplex(x,y)
   {
   	var signal = (y>=0 ? "+" : "");
   	return String(x)+signal+String(y)+"i";
   }

   function 