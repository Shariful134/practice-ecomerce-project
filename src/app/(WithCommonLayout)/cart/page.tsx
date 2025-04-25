import CartProducts from "@/components/modules/cart/cartProducts";
import Coupon from "@/components/modules/cart/cupon";
import PaymentDetails from "@/components/modules/cart/PaymentDetails";
import ProductBanner from "@/components/modules/products/banner";

const CartPage = () => {
  return (
    <div className="container mx-auto ">
      <ProductBanner title="Cart Page" path="Home - Cart" />
      <div className="grid grid-cols-12 gap-8 mt-10">
        <CartProducts />
        <Coupon />
        <PaymentDetails />
      </div>
    </div>
  );
};

export default CartPage;
