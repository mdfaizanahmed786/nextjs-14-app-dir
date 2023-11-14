import React from "react";

function ProductId({ params }: { params: { productId: string } }) {
  return <div>You are viewing product with id: {params.productId}</div>;
}

export default ProductId;
