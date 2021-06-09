import { memo, useState } from "react";
import { AddProductToWishListProps } from "./AddProductToWishList";
import dynamic from "next/dynamic";

//O componente só vai carregar quando for necessario
const AddProductToWishList = dynamic<AddProductToWishListProps>(
  () => {
    return import("./AddProductToWishList").then(
      (mod) => mod.AddProductToWishList
    );
  },
  {
    // Enquanto o componente não aparece, vai aparecer a mensagem de carregando
    loading: () => <span>Carregando...</span>,
  }
);

interface ProductItemProps {
  product: {
    id: number;
    price: number;
    priceFormatted: string;
    title: string;
  };
  onAddToWishList: (id: number) => void;
}

export function ProductItemComponent({
  product,
  onAddToWishList,
}: ProductItemProps) {
  const [isAddingToWishList, setIsAddingWishList] = useState(false);

  // async function showFormattedDate() {
  //   const {format} = await import('date-fns');
  //   format() eu apenas importo a função quando o usuário for usar
  // }

  return (
    <div>
      {product.title} - <strong>{product.priceFormatted}</strong>
      <button onClick={() => setIsAddingWishList(true)}>
        Adicionar aos favoritos
      </button>
      {isAddingToWishList && (
        <AddProductToWishList
          onAddToWishList={() => onAddToWishList(product.id)}
          onRequestClose={() => setIsAddingWishList(false)}
        />
      )}
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
