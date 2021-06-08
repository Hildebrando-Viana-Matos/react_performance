import { useMemo } from "react";
import { ProductItem } from "./ProductItem";

interface SearchResultsProps {
  results: Array<{
    id: number;
    price: number;
    title: string;
  }>;
}

export function SearchResults({ results }: SearchResultsProps) {
  const totalPrice = useMemo(() => {
    return results.reduce((total, product) => {
      return total + product.price;
    }, 0);
  }, [results]);
  // Toda fez que o resultado da minha busca mudar o calculo será refeito
  return (
    <div>
      <h2>{totalPrice}</h2>
      {results.map((product) => {
        return <ProductItem product={product} />;
      })}
    </div>
  );
}

/*
Quando usar o useMemo

1. Cálculos pesados
2. Igualdade referencial (quando passamos uma informação para um componente filho)
*/
