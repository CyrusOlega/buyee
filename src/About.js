import "./App.css";
import Header from "./components/local components/Header";
import ProductList from "./components/ProductList";
import SearchBar from "./components/SearchBar"



function About() {
  return (
    <div className="sm justify-end">
        <Header/>
        <div className="mx-24 my-12">
        <p class="title is-4">About Buyee</p>
        </div>
        <div className="mx-24 my-12">
        <p><span>Launched in 2024, Buyee is the number-one online shopping and selling destination in Southeast Asia 
            – present in the Philippines. 
            Buyee has 155,000 sellers and 3,000 brands 
            serving 560 million consumers in the region through its marketplace platform, 
            supported by a wide range of tailored marketing, data and service solutions. 
            With 300 million SKUs available, Buyee offers the widest range of products in categories from 
            consumer electronics to household goods, toys, fashion, sports equipment and groceries. 
            Focused on delivering an excellent customer experience, it offers multiple payment methods 
            including cash-on-delivery, comprehensive customer care and hassle-free returns through its own first and last
             mile delivery arm supported by approximately 100 logistics partners.
            </span>&nbsp;</p>
        </div>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>

  );
}



export default About;