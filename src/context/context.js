import React, { Component } from 'react';
import { linkData } from './linkData';

const ProductContext = React.createContext();

class ProductProvider extends Component {
	state = {
		sidebarOpen: false,
		cartOpen: false,
		links: linkData,
		cart: [],
		cartItems: 0,
		cartSubTotal: 0,
		cartTax: 0,
		carTotal: 0,
		storeProducts: [],
		filteredProducts: [],
		featuredProducts: [],
		singleProduct: {},
		loading: true,
	};
	async componentDidMount() {
		const contentful = require('contentful');
		const client = contentful.createClient({
			space: 'l9qdjfpc8vvd',
			accessToken: 'kqFK1FtE39BzI6enKVKgczj7b54UCTmHJCxqAIrfDpM',
		});
		const response = await client.getEntries({
			content_type: 'techstore',
		});
		this.setProducts(response.items);
	}

	// setProducts

	setProducts = products => {
		let storeProducts = products.map(item => {
			const { id } = item.sys.id;
			const product = { id, ...item.fields };
			return product;
		});
		let featuredProducts = storeProducts.filter(item => item.featured);
		this.setState({
			storeProducts,
			filteredProducts: storeProducts,
			featuredProducts,
		});
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
	// set Single Product
	setSingleProduct = id => {
		console.log('clicked');
		let product = this.state.storeProducts.find(item => item.id === id);
		localStorage.setItem('singleProduct', JSON.stringify(product));
		this.setState({
			singleProduct: product,
			loading: false,
		});
	};

	// get single product
	getSingleProduct = () => {
		return localStorage.getItem('singleProduct')
			? JSON.parse(localStorage.getItem('singleProduct'))
			: {};
	};
	render() {
		return (
			<ProductContext.Provider
				value={{
					...this.state,
					handleSidebar: this.handleSidebar,
					handleCart: this.handleCart,
					openCart: this.openCart,
					closeCart: this.closeCart,
					setSingleProduct: this.setSingleProduct,
					getSingleProduct: this.getSingleProduct,
				}}>
				{this.props.children}
			</ProductContext.Provider>
		);
	}
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer, ProductContext };
