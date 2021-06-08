# Performance apps com ReactJS 
O React ele sempre tentar récalcular a versão de um componente para o outro.
## Fluxo de renderização do React
Quando o React ele reconhece uma alteração em uma dessas formas... ele vai:

1. Gerar uma nova versão do componente que precisa ser renderizado;
2. Comparar essa nova versão com a versão anterior já salva na página;
3. Se houveram alterações, entre essas duas informações, ele vai renderizar uma nova versão


As 3 principais formas de renderizar um elemento no React são: 
### Pai para filho
Quando na minha aplicação que eu tenho o componente Pai que possui filhos dentro,
caso aconteça algo com o Pai, automaticamente o elemento Filho ele vai ser recalculado e 
renderizado 

```tsx
<Pai>
  <Filho />
</Pai>
```

### Propriedade 
Se um componente ele possui uma propriedade que muda durante alguma parte do processo
da aplicação, o componente será também recalculado e renderizado novamente.

```tsx
<Pai>
  <Filho title="" />
</Pai>
```

### Hooks (useState, useContext, useReducer, ...)
Quando temos um recebimento de um novo valor desses hooks que armazenam valores,
novamente ocorre a renderização.

