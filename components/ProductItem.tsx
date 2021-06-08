import { memo } from "react";

interface ProductItemProps {
  product: {
    id: number;
    price: number;
    title: string;
  };
}

export function ProductItemComponent({ product }: ProductItemProps) {
  return (
    <div>
      {product.title} - <strong>{product.price}</strong>
    </div>
  );
}

export const ProductItem = memo(ProductItemComponent, (prevPros, nextProps) => {
  return Object.is(prevPros.product, nextProps.product);
  // Verificando se as propriedades estão iguais caso tenha mudança nessas propriedades
  // Para o componente atualizar
});
// O memo evitar o react de criar uma nova versão do componente filho,
// caso o pai tenha sofrido uma alteração e se nada mudou dentro do componente filho

//Quando usar o memo
/*
1. Pure Functional Components - funções que sempre vão voltar a mesma condicional
2. Renders too often - componentes que renderizam muito
3. Re-renders with same props 
4. Medium to big size - usar em components que são dde médios para grandes
*/
