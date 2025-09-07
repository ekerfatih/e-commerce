import './App.css'
import Hero from "./components/Hero/Hero.jsx";
import Partners from "./components/Partners/Partners.jsx";
import ProductOfTheWeekParent from "./components/ProductOfTheWeek/ProductOfTheWeekParent.jsx";
import BestSeller from "./components/BestSeller/BestSeller.jsx";
import FeaturedProducts from "./components/FeaturedProducts/FeaturedProducts.jsx";
import BestServicesParent from "./components/BestServices/BestServicesParent.jsx";
import FeaturedPostsParent from "./components/FeaturedPosts/FeaturedPostsParent.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {

    return (
        <>
            <Hero/>
            <Partners/>
            <ProductOfTheWeekParent/>
            <BestSeller/>
            <FeaturedProducts/>
            <BestServicesParent/>
            <FeaturedPostsParent/>
            <Footer/>
        </>
    )
}

export default App
