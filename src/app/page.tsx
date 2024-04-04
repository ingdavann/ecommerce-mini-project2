import { Metadata } from 'next';
import React from 'react'
import ProductCard from '../components/ProductCard';

const url = "https://store.istad.co/api/products/?page_size=8";
async function getData(){
  const res = await fetch(url);
  const result = await res.json();
  return result.results;
}

export const metadata: Metadata = {
  title: "Home",
  description: "This is home's page",
  keywords: ["ecommerce", "products", "fashion", "items"],
  icons: "/assets/image/vann-commerce.png",
  openGraph: {
    title: "Product",
    description: "This looking for products",
    images: ["https://miro.medium.com/v2/resize:fit:658/0*7dm80aIWTAZ5ckUW.png"]
  }
};

const page = async () => {
  const productItem = await getData();
  return (
    <section className='mx-auto w-[90%] mb-5'>
      <section className='grid lg:grid-cols-4 md:grid-cols-3 gap-5 mt-5'>
      {
        productItem.map((product: productType)=>(
        <ProductCard 
          key={product.id}
          name={product.name}
          price={product.price}
          desc={product.desc}
          quantity={product.quantity}
          image={product.image}
       />
      ))
    }
      </section>
    </section>
  )
}

export default page