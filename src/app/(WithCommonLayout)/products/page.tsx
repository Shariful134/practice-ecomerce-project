import AllProducts from "@/components/modules/products";
import ProductBanner from "@/components/modules/products/banner";
import CategoryCard from "@/components/ui/core/CategoryCard";
import { getAllCategories } from "@/services/Category";
import { getAllProducts } from "@/services/Product";
import { ICategory } from "@/types";

const AllProductPage = async () => {
  const { data: categories } = await getAllCategories();
  const { data: products } = await getAllProducts();

  return (
    <div className="container mx-auto">
      <ProductBanner
        title="All Products"
        path="Home - Products"
      ></ProductBanner>
      <h2 className="text-xl font-bold my-5">Featured Collection</h2>
      <div className="grid grid-cols-6 gap-8 my-5">
        {categories?.slice(0, 6).map((category: ICategory, idx: number) => (
          <CategoryCard key={idx} category={category} />
        ))}
      </div>
      <AllProducts products={products}></AllProducts>
    </div>
  );
};

export default AllProductPage;
