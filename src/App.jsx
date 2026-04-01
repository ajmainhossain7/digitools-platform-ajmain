
import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Cart from './components/Cart/Cart'
import Navbar from './components/Navbar/Navbar'
import Products from './components/Products/Products'
import StatsSection from './components/StatsSection/StatsSection'
import PremiumTitle from './components/Products/PremiumTitle'
import StepsSection from './components/StepsSection/StepsSection'
import PricingSection from './components/PricingSection/PricingSection'
import CTASection from './components/CTASection/CTASection'
import Footer from './components/Footer/Footer'

const getProducts = async () => {
  const res = await fetch("/products.json")
  return res.json()
}

const productsPromise = getProducts();


function App() {
  const [activeTab, setActiveTab] = useState("product")
  const [carts, setCarts] = useState([])

  return (
    <>
      <Navbar cartCount={carts.length}></Navbar>
      <Banner></Banner>
      <StatsSection></StatsSection>
      <PremiumTitle></PremiumTitle>
      {/* tab buttons */}
      <div className="tabs tabs-box justify-center bg-transparent mb-20">
        <input type="radio" name="my_tabs_1" className={`tab rounded-full w-40 ${activeTab === "product" ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white' : null}`} aria-label="Products" defaultChecked
          onClick={() => setActiveTab("product")} />
        <input type="radio" name="my_tabs_1" className={`tab rounded-full w-40 ${activeTab === "cart" ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white' : null}`} aria-label={`Cart(${carts.length})`}
          onClick={() => setActiveTab("cart")} />
      </div>
      {activeTab === "product" && <Products productsPromise={productsPromise} carts={carts} setCarts={setCarts}></Products>
      }
      {activeTab === "cart" && <Cart carts={carts} setCarts={setCarts}></Cart>}
      <StepsSection></StepsSection>
      <PricingSection></PricingSection>
      <CTASection></CTASection>
      <Footer></Footer>
      
      
    </>
  )
}

export default App
