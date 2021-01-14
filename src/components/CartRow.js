import React from 'react';
import {
	AiOutlineDelete,
	AiOutlinePlusCircle,
	AiOutlineMinusCircle,
} from 'react-icons/ai';
import { ProductConsumer } from '../context';

const CartRow = ({ item }) => {
	console.log(item);
	const { name, price, count, total, id, images } = item;
	return (
		<ProductConsumer>
			{value => {
				const { increment, removeItem, decrement } = value;
				return (
					<>
						<div className='col-1'>
							<img src={images[0].fields.file.url} alt='' />
						</div>
						<div className='col-2'>{name}</div>
						<div className='col-3'>{price}$</div>
						<div className='col-4'>
							<AiOutlineMinusCircle
								className='decre cart-icon'
								onClick={() => decrement(id)}
							/>
							{count}
							<AiOutlinePlusCircle
								className='incre cart-icon'
								onClick={() => increment(id)}
							/>
						</div>

						<div className='col-5'>
							<AiOutlineDelete
								className='cart-icon'
								onClick={() => removeItem(id)}
							/>
						</div>
						<div className='col-6'>{total}$</div>
					</>
				);
			}}
		</ProductConsumer>
	);
};

export default CartRow;
