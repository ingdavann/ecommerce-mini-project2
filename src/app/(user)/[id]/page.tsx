'use client'
import { Params } from "@/app/types/paramsType";
import ProductCardDetail from "@/components/ProductCardDetail";

async function getProductDetail(params: string) {
    const response = await fetch(`https://store.istad.co/api/products/${params}`);
    const data = await response.json();
    return data;
}

export default async function page({ params }: Params) {
	const product: productType = await getProductDetail(params.id);
	return (
		<div className="flex justify-center ">
			<ProductCardDetail
				id={product.id}
				// seller={product.seller}
				category={product.category}
				name={product.name}
				desc={product.desc}
				image={product.image}
				price={product.price}
				quantity={product.quantity}
			/>
		</div>
	);
}