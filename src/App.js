import './App.css';
import SideCart from './components/SideCart';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import Contact from './pages/Contact';
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import CartPage from './pages/CartPage';
import Products from './pages/Products';

function App() {
	return (
		<Router>
			<Navbar />
			<Sidebar />
			<SideCart />

			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/about' component={About} />
				<Route exact path='/contact' component={Contact} />
				<Route exact path='/products/:slug' component={Product} />
				<Route exact path='/cartpage' component={CartPage} />
				<Route exact path='/products' component={Products} />
			</Switch>
		</Router>
	);
}

export default App;
