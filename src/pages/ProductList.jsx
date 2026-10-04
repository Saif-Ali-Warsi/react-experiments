import { useMemo, useState } from "react";
import InputBox from "../components/input-box/input-box";

function ProductList() {
  const [products] = useState([
    { id: 1, name: "Laptop", price: 80000 },
    { id: 2, name: "Phone", price: 40000 },
    { id: 3, name: "Tablet", price: 30000 },
  ]);

  const [search, setSearch] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
    );
  }, [products, search]);

  return (
    <>
      <h4>Search implementation using useMemo Hook</h4>
      <InputBox
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      ></InputBox>

      {filteredProducts.map((product) => (
        <p key={product.id}>{product.name}</p>
      ))}
    </>
  );
}

export default ProductList;
