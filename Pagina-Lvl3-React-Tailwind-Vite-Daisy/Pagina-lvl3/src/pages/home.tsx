import Header from "../components/layouts/header"
import Footer from "../components/layouts/footer"
import Product from "../components/layouts/product"
import ProductInfo from "../components/layouts/product-info"
import ProductTags from "../components/layouts/product-tags"
import ProductAbout from "../components/layouts/product-about"
import ProductMoreLike from "../components/layouts/product-more-like"

function Home() {
  return (
    <>
    {/* todo hacer las lementos responsivos */}
      <Header />

      {/* Producto */}
      <Product></Product>
      <ProductInfo/>
      <ProductTags/>
      <ProductAbout/>
      <ProductMoreLike/>

      <Footer />
    </>
  )
}

export default Home