"use client";

import { Suspense } from "react";
import CartPage from "../components/CartPage";

export default function PaymentPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CartPage />
    </Suspense>
  );
}
