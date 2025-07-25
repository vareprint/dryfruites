import Image from "next/image";
import TextContent from "./component/TextContent";
import Header from "./component/Header";
import Product from "./component/Product";
import Footer from "./component/Footer";

export default function Home() {
  return (
    <>
    <Header />
    <TextContent />
    <Product />
    <Footer />
    </>
  );
}
