# Biblioteca JavaScript de Números Complexos/Complex Numbers JavaScript Library

I. Intro
  
  A biblioteca foi desenvolvida por alunos do curso de Eng. Computação da UFPa - Universidade Federal do Pará com o intuito de oferecer suporte web de operações com números complexos.
  Tais alunos são: Daniel Breno Guiomarino Menezes, Erick Modesto Campos, Israel de Barros Amorim, Suzane Santos dos Santos e Rodrigo Santos do Amor Divino Lima.
  Neste readme estarão listadas todas as funções suportadas pela biblioteca.

II. Operações Suportadas
  
  A biblioteca suporta as seguintes operações com números complexos:

   -Soma  -Subtração  -Multiplicação  -Divisão

   -Módulo  -Representação Exponencial 

   -Seno  -Cosseno  -Tangente

   -Raiz Quadrada

   -Exponencial Natural  -Logaritmo Natural  -Logaritmo em base C

   -Seno Hiperbólico  -Cosseno Hiperbólico  -Tangente Hiperbólica

   -Seno Inverso  -Cosseno Inverso  -Tangente Inversa

III. Métodos de Entrada
  
  A biblioteca suporta os seguintes métodos de entrada de dados:

    -Número Real (x) -Número Complexo Inteiro (x+iy)  -Número Imaginário (iy)  -Número Complexo "i" (x+i)  -Objeto ({r:x , i:y , eq: "x+iy"})
  A biblioteca somente reconhece um número complexo inteiro se descrito por meio de string. Ex: "3+1i".

IV. Funções

  -numComplex(x,y) : função construtora de número complexo, tem como entradas x e y, que representam a parte real e a imaginária respectivamente. Retona em forma de string o número complexo.

  -newComplex(input) : função que reconhece um número complexo em uma cadeia de caracteres " " ou reconhece um número se não forem caracteres. Retorna em forma de ojeto o número complexo.

  -complexSum(first,second) : função que soma dois números complexos, tem como entrada dois números complexos. Retorna em forma de string o número complexo resultante.

  -complexSub(first,second) : função que subtrai dois números complexos, tem como entrada dois números complexos. Retorna em forma de string o número complexo resultante.

  -complexMult(first,second) : função que multiplica dois números complexos, tem como entrada dois números complexos. Retorna em forma de string o número complexo resultante.

  -complexDiv(first,second) : função que divide dois números complexos, tem como entrada dois números complexos. Retorna em forma de string o número complexo resultante.

  -complexMod(input) : função que calcula o módulo do número complexo, tem como entrada um número complexo. Retorna o valor númerico do módulo.

  -complexExpForm(input) : função que tranforma o número complexo em sua forma/representação exponencial,tem como entrada um número complexo. Retorna em forma de string a representação exponencial do número complexo.

  -complexSin(input) : função que calcula o seno do número complexo, tem como entrada um número complexo. Retorna o valor númerico do seno.

  -complexCos(input) : função que calcula o cosseno do número complexo, tem como entrada um número complexo. Retorna o valor númerico do cosseno.

  -complexTan(input) : função que calcula a tangente do número complexo, tem como entrada um número complexo. Retorna o valor númerico da tangente.

  -complexsquareRoot(input) : função que calcula a raiz quadrada do número complexo, tem como entrada um número complexo. Retorna em forma de string a representação da raiz quadrada do número complexo.

  -complexExp(input) : função que calcula a exponecial natural de um número complexo, tem como entrada um número complexo. Retorna em forma de string a representação da exponencial natural de um número complexo.

  -complexLogN(input) : função que calcula o logaritmo natural de um número complexo, tem como entrada um número complexo. Retorna em forma de string o valor do logaritmo natural do número complexo.

  -complexLog(input,base) : função que calcula o logaritmo de um número complexo em uma base arbitrária, tem como entrada um número complexo e uma base arbitrária. Existem duas formas de retorno, a primeira ele retorna em forma de string a representação numérica do logaritmo natural do numero complexo divido pelo logaritmo natural da base. A segunda ele retorna o valor dessa divisão.

  -complexSinh(input) : função que calcula o seno hiperbólico de um número complexo, tem como entrada um número complexo. Possui dois tipos de retorno, o primeiro retorna em forma string a representação literal do seno hiperbólico do número complexo. O segundo ele retorna o valor numérico do seno hiperbólico, executando uma multiplicação complexa do seno do número com -i.

  -complexCosh(input) : função que calcula o cosseno hiperbólico de um número complexo, tem como entrada um número complexo. Retorna o valor numérico do cossen hiperbólico do número complexo.

  -complexTgh(input) : função que calcula a tangente hiperbólica de um número complexo, tem como entrada um número complexo. Possui dois tipos de retorno, o primeiro retorna em forma string a representação literal da tangente hiperbólica do número complexo. O segundo ele retorna o valor numérico da tangente hiperbólica, executando uma multiplicação complexa da tangente do número com -i.

  -complexSinIn(input) : função que calcula o seno inverso do número complexo, tem como entrada um número complexo. Retorna em forma de string o seno inverso do número complexo.

  -complexCosIn(input) : função que calcula o cosseno inverso do número complexo, tem como entrada um número complexo. Retorna em forma de string o cosseno inverso do número complexo.

  -complexTgIn(input) : função que calcula a tangente inversa do número complexo, tem como entrada um número complexo. Retorna em forma de string a tangente inversa do número complexo.

  *** OBSERVAÇÃO: 
      As três funções Seno,Cosseno e Tangente Inversas não retornam o ângulo do número complexo, mas sim um número complexo. Estas não são arcseno,arccos ou arctan.Tais formas foram as ensinadas pelo professor em sala:
            sen^(-1)z= -i*log(iz+(1-z)^(1/2))     cos^(-1)z= log(z+(z^2+1)^(1/2))   tg^(-1)z= 1/2 * log(1+z/1-z)   
  ***

V. Prototypes

  A biblioteca oferece a possibilidade de operação com variáveis complexas do tipo:
     Ex.: numcomp = newComplex("3+1i")
  Dessa forma "numcomp" vira uma variável do tipo número complexo a qual pode chamar todos os métodos desse tipo de variável, os quais são:

     -numcomp.complexSum(second) : soma o número complexo de entrada com o armazenado na variável. Retorna em forma de string o número complexo resultante.

     -numcomp.complexSub(second) : subtrai o número complexo de entrada com o armazenado na variável. Retorna em forma de string o número complexo resultante.

     -numcomp.complexMult(second) : multiplica o número complexo de entrada com o armazenado na variável. Retorna em forma de string o número complexo resultante.

     -numcomp.complexDiv(second) : Divide o número complexo de entrada com o armazenado na variável. Retorna em forma de string o número complexo resultante.

     -numcomp.complexMod() : calcula o módulo do número complexo armazenado na variável. Retorna o valor numérico do módulo.

     -numcomp.complexExpForm() : transforma o número complexo armazenado na variável em sua representação exponencial. Retorna em forma de string a representação
     exponencial do número complexo.

     -numcomp.complexSin() : calcula o seno do número complexo armazenado na variável. Retorna o valor numérico do seno do número complexo.

     -numcomp.complexCos() : calcula o cosseno do número complexo armazenado na variável. Retorna o valor numérico do cosseno do número complexo.

     -numcomp.complexTan() : calcula a tangente do número complexo armazenado na variável. Retorna o valor numérico da tangente do número complexo.

     -numcomp.complexsquareRoot() : calcula a raiz quadrada do número complexo armazenado na variável. Retorna em forma de string a representação da raiz quadrada
     do número complexo.

     -numcomp.complexExp() : calcula a exponencial natural do número complexo armazenado na variável. Retorna em forma de string a representação da exponencial 
     natural do número complexo.

     -numcomp.complexLogN() : calcula o logaritmo natural do número complexo armazenado na variável. Retorna em forma de string o valor do logaritmo natural do 
     número complexo.

     -numcomp.complexLog(base) : 