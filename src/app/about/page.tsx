import React from 'react'
import image3D from '../../../public/assets/image/3d.png'
import cat from '../../../public/assets/image/cat.png'
import Image from 'next/image'
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: "Abuout Us",
    description: "This is about's page",
    keywords: ["ecommerce", "products", "fashion", "items"],
    icons: "/assets/image/vann-commerce.png",
    openGraph: {
      title: "Product",
      description: "This looking for products",
      images: ["https://miro.medium.com/v2/resize:fit:658/0*7dm80aIWTAZ5ckUW.png"]
    }
  };
const page = () => {
    return (
        <>
            <section className="sm:flex items-center max-w-screen-xl w-[90%] mx-auto">
                <div className="sm:w-1/2 p-10">
                    <div className="image object-center text-center">
                        <Image src={image3D} alt="commerce" />
                    </div>
                </div>
                <div className="sm:w-1/2 p-5">
                    <div className="text">
                        <span className="text-[#155e75] border-b-2 border-indigo-600 uppercase">About us</span>
                        <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">Who we are <span className="text-[#155e75]">and what we stand for?</span>
                        </h2>
                         
                        <p className="text-gray-700">
                        At VANN COMMERCE, we're more than just an online cat store - we're a family of cat lovers dedicated to enriching the lives of felines and their humans. We believe that cats deserve comfortable, stimulating environments that bring out their playful personalities. We source high-quality, ethically made products that promote wellness and joy for your furry companion.
                        </p>
                    </div>
                </div>
            </section>
            <section className="sm:flex items-center max-w-screen-xl w-[90%] mx-auto">
                
                <div className="sm:w-1/2 p-5">
                    <div className="text">
                
                        <h2 className="my-4 font-bold text-3xl text-[#155e75] sm:text-4xl ">Our Story 
                        </h2>
                         
                        <p className="text-gray-700">
                        VANN COMMERCE began in 2020, fueled by our own cat, Luna's, boundless energy and insatiable curiosity. We struggled to find engaging and durable toys that wouldn't fall apart after a single swipe of her paw. Frustrated by the lack of options, we decided to take matters into our own hands. We started crafting our own catnip-filled toys and scratching posts, using all-natural, safe materials. Luna's enthusiastic response sparked the idea for VANN COMMERCE - a place where cat parents could find unique, well-made products that would ignite their feline's inner explorer.
                        </p>
                    </div>
                </div>
                <div className="sm:w-1/2 p-10">
                    <div className="image object-center text-center">
                        <Image src={cat} alt="commerce" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default page
