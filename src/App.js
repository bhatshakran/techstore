import './App.css';
import SideCart from './components/SideCart';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {
	return (
		<Router>
			<Navbar />
			<Sidebar />
			<SideCart />

			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/about' component={About} />
			</Switch>
		</Router>
	);
}

export default App;
