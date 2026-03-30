
import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Products from './components/Products/Products'
import StatsSection from './components/StatsSection/StatsSection'

const getModels = async () => {
  const res = await fetch("/products.json")
  return res.json()
}

const productsPromise = getModels();

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <StatsSection></StatsSection>
      <Products productsPromise={productsPromise}></Products>
      
    </>
  )
}

export default App
