"use client";
import { useRouter } from "next/navigation";

export default function OrderPlaced() {
  const router = useRouter();
  const handlePlaceOrder = () => {
    // the below code allows us to navigate to the home page
    // router.push("/");

    // below code allows us to navigate to the next page
    // router.forward();

    // below code allows us to navigate to the prvious page
    // router.back();

    // below cdde will replace the history to the home page or where it was at root level
    router.replace("/");
  };

  return (
    <div>
      <h1>Order Placed</h1>
      <button
        className="bg-blue-500 px-2 py-4 rounded-md hover:shadow-md text-white"
        onClick={handlePlaceOrder}
      >
        Place your order
      </button>
    </div>
  );
}
