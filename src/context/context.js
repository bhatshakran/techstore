import React, { Component } from 'react';
import { linkData } from './linkData';

const ProductContext = React.createContext();

class ProductProvider extends Component {
	state = {
		sidebarOpen: false,
		cartOpen: false,
		cartItems: 2,
		links: linkData,
		cart: [],
	};

	// handle sidebar
	handleSidebar = () => {
		console.log('clicked');
		this.setState({
			sidebarOpen: !this.state.sidebarOpen,
		});
	};

	// handle cart
	handleCart = () => {
		this.setState({ cartOpen: !this.state.cartOpen });
	};

	// close cart
	closeCart = () => {
		this.setState({
			cartOpen: false,
		});
	};

	// open cart
	openCart = () => {
		this.setState({
			cartOpen: true,
		});
	};
	render() {
		return (
			<ProductContext.Provider
				value={{
					...this.state,
					handleSidebar: this.handleSidebar,
					handleCart: this.handleCart,
					openCart: this.state.openCart,
					closeCart: this.state.closeCart,
					links: this.state.links,
				}}>
				{this.props.children}
			</ProductContext.Provider>
		);
	}
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
