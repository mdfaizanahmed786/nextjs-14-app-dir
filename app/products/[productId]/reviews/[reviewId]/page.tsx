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
  if(parseInt(params.reviewId) > 10) {
    return notFound();
  }
  return (
    <div>
      This is the product page having product id: {params.productId} and with
      reviewid: {params.reviewId}
    </div>
  );
}

export default ReviewPage;
