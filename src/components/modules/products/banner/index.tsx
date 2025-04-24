import styles from "./Banner.module.css";
const ProductBanner = ({ title, path }: { title: string; path: string }) => {
  return (
    <div
      className={`${styles.banner} border-2 border-white rounded mt-10 flex items-center justify-center`}
    >
      <div className="text-center">
        <h2 className="font-bold text-2xl leading-10 ">{title}</h2>
        <p>{path}</p>
      </div>
    </div>
  );
};

export default ProductBanner;
