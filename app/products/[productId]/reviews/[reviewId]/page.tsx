import React from "react";

function ReviewPage({
  params,
}: {
  params: {
    reviewId: string;
    productId: string;
  };
}) {
  return (
    <div>
      This is the product page having product id: {params.productId} and with
      reviewid: {params.reviewId}
    </div>
  );
}

export default ReviewPage;
