import { useMemo } from "react";
import { ProductItem } from "./ProductItem";

interface SearchResultsProps {
  totalPrice: number;
  results: Array<{
    id: number;
    price: number;
    title: string;
    priceFormatted: string;
  }>;
  onAddToWishList: (id: number) => void;
}

export function SearchResults({
  results,
  totalPrice,
  onAddToWishList,
}: SearchResultsProps) {
  return (
    <div>
      <h2>{totalPrice}</h2>
      {results.map((product) => {
        return (
          <ProductItem
            key={product.id}
            product={product}
            onAddToWishList={onAddToWishList}
          />
        );
      })}
    </div>
  );
}

/*
Quando usar o useMemo

1. Cálculos pesados
2. Igualdade referencial (quando passamos uma informação para um componente filho)
*/
