import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";


function Checkout() {

	const [{basket}, dispatch] = useStateValue();

	return (
		<div className="Checkout">
			<div className="checkout__left">
				<img className="checkout__ad"
					src="https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/Fuji/Help/English/Glow_Widget_English_2.png" alt=""

				/>
				<div>
					<h2 className="checkout__title">Your Shopping Basket</h2>

					{basket.map(item => (
						<CheckoutProduct 
							id={item.id}
							title={item.title}
							image={item.image}
							price={item.price}
							rating={item.rating}


						/>
						))}

					{ /*CheckoutProduct*/ }
					{ /*CheckoutProduct*/ }
					{ /*CheckoutProduct*/ }
					{ /*CheckoutProduct*/ }

				</div>
			</div>

		<div className="checkout__right">

			<Subtotal />



		</div>

		</div>
	);

}

export default Checkout;