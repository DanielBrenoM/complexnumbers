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
  -
