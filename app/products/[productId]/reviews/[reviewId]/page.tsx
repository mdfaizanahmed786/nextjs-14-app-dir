import React from "react";
import { notFound } from "next/navigation";

function ReviewPage({
  params,
}: {
  params: {
    reviewId: string;
    productId: string;
  };
}) {
  if(parseInt(params.reviewId) > 120) {
    return notFound();
  }
  if(parseInt(params.reviewId) > 15) {
    throw new Error("This is going nowhere")
  }
  return (
    <div>
      This is the product page having product id: {params.productId} and with
      reviewid: {params.reviewId}
    </div>
  );
}

export default ReviewPage;
