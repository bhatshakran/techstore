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
		cartSubtotal: 0,
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
		let featuredProducts = storeProducts.filter(item => item.featured === true);
		this.setState(
			{
				storeProducts,
				filteredProducts: storeProducts,
				featuredProducts,
				cart: this.getStorageCart(),
				singleProduct: this.getSingleProduct(),
				loading: false,
			},
			() => {
				this.addTotals();
			}
		);
	};
	// get cart from local storage
	getStorageCart = () => {
		let cart;
		localStorage.getItem('cart')
			? (cart = JSON.parse(localStorage.getItem('cart')))
			: (cart = []);
		return cart;
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

	// add to cart
	addToCart = id => {
		let tempCart = [...this.state.cart];
		let tempProducts = [...this.state.storeProducts];
		let tempItem = tempCart.find(item => item.id === id);

		if (!tempItem) {
			tempItem = tempProducts.find(item => item.id === id);
			let total = tempItem.price;
			let cartItem = { ...tempItem, count: 1, total };
			tempCart = [...tempCart, cartItem];
		} else {
			tempItem.count++;
			tempItem.total = tempItem.price * tempItem.count;
			tempItem.total = parseFloat(tempItem.total.toFixed(2));
		}
		this.setState(
			() => {
				return { cart: tempCart };
			},
			() => {
				this.addTotals();
				this.syncStorage();
				this.openCart();
			}
		);
	};
	// get totals
	getTotals = () => {
		let subTotal = 0;
		let cartItems = 0;
		this.state.cart.forEach(item => {
			subTotal += item.total;
			cartItems += item.count;
		});

		subTotal = parseFloat(subTotal.toFixed(2));
		let tax = subTotal * 0.22;
		let total = subTotal + tax;
		total = parseFloat(total.toFixed(2));
		return {
			cartItems,
			subTotal,
			tax,
			total,
		};
	};
	//add totals
	addTotals = () => {
		const totals = this.getTotals();
		this.setState({
			cartItems: totals.cartItems,
			cartSubtotal: totals.subTotal,
			cartTax: totals.tax,
			cartTotal: totals.total,
		});
	};
	// sync storage
	syncStorage = () => {
		localStorage.setItem('cart', JSON.stringify(this.state.cart));
	};
	// increment
	increment = id => {
		let tempCart = [...this.state.cart];
		const cartItem = tempCart.find(item => item.id === id);
		cartItem.count++;
		cartItem.total = cartItem.count * cartItem.price;
		cartItem.total = parseFloat(cartItem.total.toFixed(2));
		this.setState(
			() => {
				return {
					cart: [...tempCart],
				};
			},
			() => {
				this.addTotals();
				this.syncStorage();
			}
		);
	};
	// decrement
	decrement = id => {
		let tempCart = [...this.state.cart];
		const cartItem = tempCart.find(item => item.id === id);
		cartItem.count = cartItem.count - 1;
		if (cartItem.count === 0) {
			this.removeItem(id);
		} else {
			cartItem.total = cartItem.count * cartItem.price;
			cartItem.total = parseFloat(cartItem.total.toFixed(2));
			this.setState(
				{
					cart: [...tempCart],
				},
				() => {
					this.addTotals();
					this.syncStorage();
				}
			);
		}
	};
	// remove item
	removeItem = id => {
		let tempCart = [...this.state.cart];
		tempCart = tempCart.filter(item => item.id !== id);
		this.setState(
			{
				cart: [...tempCart],
			},
			() => {
				this.addTotals();
				this.syncStorage();
			}
		);
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
					addToCart: this.addToCart,
					increment: this.increment,
					decrement: this.decrement,
					removeItem: this.removeItem,
				}}>
				{this.props.children}
			</ProductContext.Provider>
		);
	}
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer, ProductContext };
