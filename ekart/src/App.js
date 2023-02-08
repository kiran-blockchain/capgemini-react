import logo from './logo.svg';
import './App.css';
import Countries from './components/countries';
import Table from './components/Table';
import Register from './components/register';

const App =()=>{
  return(
    <div className='container'>
      <div className='row'>
        {/* <div className='col-md-3'>
          <Countries/>
        </div> */}
        {/* <Table/> */}
        <Register/>
      </div>
    </div>
  )
}

export default App;
