import './App.css';
import Products from './components/product/Products';
import User from './components/user/User';

function App() {
  return (
    <div className="App container">
      <div className='row'>
        <Products/>
        <User />
      </div>
    </div>
  );
}

export default App;
