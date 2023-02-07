import Footer from "./components/Footer"
import Header from "./components/Header"
import "./App.css"
import Table from "./components/Table";
import Details from "./components/Details";
import Counter from "./components/Counter";
import Textbox from "./components/Textbox/index";
const App = () => {
const companyName="Capgeminiiiii";
const address ="India";
  return (
    <div className="container">
      <Header company={companyName} location={address}/>
      <Counter/>
      <Textbox/>
      <Footer/>
    </div>
  )
}
export default App