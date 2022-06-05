import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import SubNavbar from "../SubNavbar/SubNavbar"
import Content from "../Content/Content"
import ProductGrid from "../ProductGrid/ProductGrid"
import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"
import "./Home.css"

export default function Home({
  user,
  isFetching,
  products,
  activeCategory,
  setActiveCategory,
  handleOnSearchInputChange,
  searchInputValue,
  addToCart,
  removeFromCart,
  getQuantityOfItemInCart,
}) {
  const location = useLocation()

  useEffect(() => {
    // some silly react router magic to get hash links to work
    if (location.hash) {
      const el = document.querySelector(location.hash)
      if (el) {
        el.scrollIntoView({ behavior: "smooth" })
      }
    }
  }, [location.hash])

  const productsByCategory =
    Boolean(activeCategory) && activeCategory.toLowerCase() !== "all categories"
      ? products.filter((p) => p.category === activeCategory.toLowerCase())
      : products

  const productsToShow = Boolean(searchInputValue)
    ? productsByCategory.filter((p) => p.name.toLowerCase().indexOf(searchInputValue))
    : productsByCategory

  return (
    <div className="Home">
      <Navbar />
      <SubNavbar
        user={user}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        handleOnSearchInputChange={handleOnSearchInputChange}
        searchInputValue={searchInputValue}
      />
      <ProductGrid
        products={productsToShow}
        isFetching={isFetching}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        getQuantityOfItemInCart={getQuantityOfItemInCart}
      />
      <Content />
      <Footer />
    </div>
  )
}
