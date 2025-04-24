import { IProduct } from "@/types";
import FilterSidebar from "./filtersidebar";
import ProductCard from "@/components/ui/core/ProductCard";

const AllProducts = ({ products }: { products: IProduct[] }) => {
  console.log(products);
  return (
    <div className="flex gap-8 mt-10">
      <div>
        <FilterSidebar></FilterSidebar>
      </div>
      <div>
        <div className="grid grid-cols-3 gap-8 ">
          {products?.map((product: IProduct, idx: number) => (
            <ProductCard key={idx} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
