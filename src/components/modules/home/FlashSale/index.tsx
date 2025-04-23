import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ui/core/ProductCard";
import { getFlashSaleProducts } from "@/services/flashSale.ts";
import { IProduct } from "@/types";
import Link from "next/link";
import CountdownTimer from "./CountDown";

const FlashSaleProducts = async () => {
  const { data: products } = await getFlashSaleProducts();

  return (
    <div className="bg-white bg-opacity-50 py-10">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="">
            <h2 className="font-bold text-2xl">Flash Sale</h2>
            <CountdownTimer></CountdownTimer>
          </div>
          <Link href="/products">
            <Button variant="outline" className="rounded-full">
              All Collection
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-5 gap-8 my-5">
          {products?.slice(0, 6).map((product: IProduct, idx: number) => (
            <ProductCard key={idx} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlashSaleProducts;
