"use client";

import { Button } from "@/components/ui/button";
import { currencyFormatter } from "@/lib/currencyFormatter";
import {
  citySelector,
  grandTotalSelector,
  orderedProductsSelector,
  orderSelector,
  shippingAddressSelector,
  shippingCostSelector,
  subTotalSelector,
} from "@/redux/features/cartSlice";
import { useAppSelector } from "@/redux/hooks";
import { toast } from "sonner";

export default function PaymentDetails() {
  const subTotal = useAppSelector(subTotalSelector);
  const shippingCost = useAppSelector(shippingCostSelector);
  const order = useAppSelector(orderSelector);
  const cartProducts = useAppSelector(orderedProductsSelector);
  const grandTotal = useAppSelector(grandTotalSelector);
  const shippingAddress = useAppSelector(shippingAddressSelector);
  const city = useAppSelector(citySelector);

  const handleOrder = () => {
    const orderLoading = toast.loading("Order is beign Placed");
    try {
      if (!city) {
        throw new Error("City is missing");
      }
      if (!shippingAddress) {
        throw new Error("Shipping address is missing");
      }
      if (cartProducts?.length === 0) {
        throw new Error("Cart is emty , What are you trying to order?");
      }
      toast.success("Order creted successfully", { id: orderLoading });
    } catch (error: any) {
      toast.error(error.message, { id: orderLoading });
    }
    console.log(order);
  };
  return (
    <div className="border-2 border-white bg-background brightness-105 rounded-md col-span-4 h-fit p-5">
      <h1 className="text-2xl font-bold">Payment Details</h1>
      <div className="space-y-2 mt-4">
        <div className="flex justify-between">
          <p className="text-gray-500 ">Subtotal</p>
          <p className="font-semibold">{subTotal}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-500 ">Discount</p>
          <p className="font-semibold">00</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-500 ">Shipment Cost</p>
          <p className="font-semibold">{currencyFormatter(shippingCost)}</p>
        </div>
      </div>
      <div className="flex justify-between mt-10 mb-5">
        <p className="text-gray-500 ">Grand Total</p>
        <p className="font-semibold">{currencyFormatter(grandTotal)}</p>
      </div>
      <Button
        onClick={handleOrder}
        className="w-full text-xl font-semibold py-5"
      >
        Order Now
      </Button>
    </div>
  );
}
