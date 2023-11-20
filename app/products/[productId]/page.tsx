import React from "react";
import { Metadata } from "next";
type Props = {
  params: {
    productId: string;
  };
};
// below is the generate  metadata function
export async function generateMetadata({ params }: Props) {
  // some async calls can also be made here
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Iphone Product ${params.productId}`);
    }, 1000);
  });
  return {
    title,
    description: `Product ${params.productId} description`,
  };
}

function ProductId({ params }: Props) {
  return <div>You are viewing product with id: {params.productId}</div>;
}

export default ProductId;
