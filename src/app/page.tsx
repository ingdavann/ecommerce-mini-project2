import { Metadata } from 'next';
import React, { Suspense } from 'react'
import ProductCard from '../components/ProductCard';
import LoadingComponent from './loading';
import Link from 'next/link';
import { Carousel } from 'flowbite-react';
import CarouselCom from '@/components/CarouselCom';

const url = "https://store.istad.co/api/products/?page_size=16";
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
    <>
      {/* <CarouselCom/> */}
      <section className='mx-auto w-[90%] mt-10 mb-5'>
      <h1 className="text-3xl font-bold text-[#00407f]"> ➡️ Product Lists</h1>
      <section className='grid lg:grid-cols-4 md:grid-cols-3 gap-5 mt-10'>
        <Suspense fallback={<LoadingComponent/>}>
        {
        productItem.map((product: productType)=>(
          <Link as={`/${product.id}`} href="#" key={product.id}>
          <ProductCard 
            name={product.name}
            price={product.price}
            desc={product.desc}
            quantity={product.quantity}
            image={product.image}
            category=''
            id={0}
          />
        </Link>
      ))
    }
        </Suspense>
      </section>
    </section>
    </>
    
  )
}

export default page