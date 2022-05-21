import React from 'react'
import "./Home.css";
import Product from "./Product"

function Home() {
	return (
		<div className="home">

			<div className="home__container">
				<img className="home__image" src="https://m.media-amazon.com/images/I/61N83xtyr6L._SX3000_.jpg"/>
			
				<div className="home__row">
					<Product
						id="12321341"
						title="The lean startup"
						price={2900}
						image="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcScpS9dtMChvpksbeqyLbv_CJ0dZuOPK81mmpFhfAly1vEzYBSt"
						rating={5}
					/>
					<Product
						id="49538094"
						title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
						price={24600}
						image="https://m.media-amazon.com/images/I/61FJtVQh9bL.jpg"
						rating={4}
					/>

				</div>


				<div className="home__row">
					<Product
						id="4903850"
						title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
						price={44850}
						image="https://images.samsung.com/is/image/samsung/uk-monitor-crg90-lc49rg90ssuxen-dynamicsilver-156915391?$PD_GALLERY_JPG$"
						rating={3}
					/>
					<Product
						id="23445930"
						title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
						price={9990}
						image="https://skygarden.azureedge.net/media/products/1247649-23a7adf406ba4d79b47d929465180248.jpg"
						rating={5}
					/>
					<Product
						id="3258367662"
						title="New Apple iPad Pro (12.9-inch, WiFi, 128GB) - Silver (4th Generation)"
						price={69150}
						image="https://m.media-amazon.com/images/I/61YGKm6lJwL._AC_UY218_.jpg"
						rating={4}
					/>

				</div>


				<div className="home__row">
					<Product
						id="727468786"
						title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
						price={109350}
						image="https://m.media-amazon.com/images/I/81rus0UFhsL._AC_SX450_.jpg"
						rating={4}
					/>

				</div>


			</div>

		</div>

	);
}


export default Home;