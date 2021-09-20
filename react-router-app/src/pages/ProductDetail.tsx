import { useParams } from "react-router";

const ProductDetail = () => {
  const {productId} = useParams<{productId: string}>();

  return (
    <section>
      <h1>Product Detail {productId}</h1>
    </section>
  );
};

export default ProductDetail;
