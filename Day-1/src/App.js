import Footer from "./components/Footer"
import Header from "./components/Header"
import "./App.css"
import Table from "./components/Table";
import Details from "./components/Details";
import Counter from "./components/Counter";
import Textbox from "./components/Textbox/index";
import { useState } from "react";
import Display from "./components/Display";
import Toggle from "./components/Toggle";
import Dropdown from "./components/Dropdown";
const App = () => {
  const companyName = "Capgeminiiiii";
  const address = "India";

  const [personalInfo, updateUserInfo] = useState({});
  const [selectedGender, selectGender] = useState("");
  const [selectedCountry, selectCountry] = useState("");
  const countryList = [{
    value: "IN",
    text: "India"
  },
  {
    value: "USA",
    text: "United States of America"
  }];

  const genderList = [{
    value: "M",
    text: "Male"
  },
  {
    value: "F",
    text: "Female"
  },
  {
    value: "O",
    text: "Others"
  }
  ];
  const countrySelect = (data) => {
    selectCountry(data);
  }
  const genderSelect = (data) => {
    selectGender(data);
  }
  const genderDropdown = {
    className:'form-control',
    name:'gender',
    dataList:genderList,
    selected: genderSelect
  }
  const countryDropdown = {
    className:'form-control',
    name:'country',
    dataList:countryList,
    selected: countrySelect
  }
 
  const fetchUpdates = (data) => {
    updateUserInfo(data);//update state object 
  }

  return (
    <div className="container">
      {/* <Header company={companyName} location={address}/> */}
      <div>
        <Dropdown dropdown ={genderDropdown}/>
        <Dropdown dropdown={countryDropdown} />
        <div>
          <h6>Gender :{selectedGender}</h6>
          <h6>Country :{selectedCountry}</h6>
        </div>

      </div>
      {/* <Footer/> */}
    </div>
  )
}
export default App