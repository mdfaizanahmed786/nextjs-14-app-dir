import Link from "next/link";
export default function ProductLists() {
  const productId = 100;
  return (
    <div>
      <h1>Product Lists</h1>
      <Link href="/products/1">Product 1</Link>
      <Link href="/products/2">Product 2</Link>
      <Link href="/products/3" replace>
        Product 3
      </Link>
      <Link href={`/products/${productId}`}>Product {productId}</Link>
    </div>
  );
}

// replace prop in Link component will replace the current history entry instead of adding a new one.(i.e will be navigated to the home component..or home page..)
