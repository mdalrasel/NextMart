import Image from "next/image";

import Link from "next/link";
import Banner from "./components/Banner";
import ProductsPage from "./products/page";

export default function Home() {
  return (
    <div>
      <Banner />
      <ProductsPage />
    </div>
  );
}
