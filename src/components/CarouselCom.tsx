import { Carousel } from "flowbite-react";

export default function CarouselCom() {
	return (
		<div className="h-56 sm:h-64 xl:h-80 2xl:h-[600px]">
			<Carousel pauseOnHover>
				<img src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/1f8a6c84-da59-4de3-a5e6-6dc7772d4ad4.__CR0,0,970,300_PT0_SX970_V1___.jpg" alt="cat"/>
				<img src="https://petshopindia.com/image/cache/data/category%20banner/best%20cat%20toy-940x260.jpg" alt="headphone" />
				<img src="https://images.ctfassets.net/f60q1anpxzid/5c2Re70Bfp2dotDIyoCPLi/cbb6b9e96083250e0ee23e595eafb49f/LT_Cat_Banner_Pet_2.jpg?fm=jpg&fl=progressive&q=50&w=1200" alt="phone" />
			</Carousel>
		</div>
	);
}