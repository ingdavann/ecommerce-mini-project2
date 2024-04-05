import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Policy",
    description: "This is policy&apos;s page",
    keywords: ["ecommerce", "products", "fashion", "items"],
    icons: "/assets/image/vann-commerce.png",
    openGraph: {
      title: "Policy",
      description: "please feel free to read our policy guide",
      images: ["https://miro.medium.com/v2/resize:fit:658/0*7dm80aIWTAZ5ckUW.png"]
    }
  };

const page = () => {
    return (
        <section className="w-[80%] mx-auto bg-slate-50 rounded-lg mb-5 mt-5">
            <div>
                <div className="container mx-auto px-4 py-8">
                    <h1 className="text-3xl font-bold mb-4 text-[#00407f]"><span className="text-[#fb2925]">VANN</span> COMMERCE Policies</h1>
                    <p className="mb-4">
                    Thank you for visiting our eCommerce Policy website. Here, we aim to provide you with clear and transparent information about our policies and practices to ensure a safe and enjoyable shopping experience.
                    </p>

                    <h2 className="text-2xl font-bold mb-2">Privacy Policy</h2>

                    <p className="mb-4">
                    At VANN COMMERCE, we prioritize the privacy and security of our customers&apos; personal information. Our Privacy Policy outlines how we collect, use, and protect your data.
                    </p>

                    <h2 className="text-2xl font-bold mb-2">Terms of Service</h2>

                    <p className="mb-4">
                    By using our website, you agree to abide by our Terms of Service. These terms govern your use of our platform and outline your rights and responsibilities as a user.
                    </p>

                    <h2 className="text-2xl font-bold mb-2">Shipping and Delivery Policy</h2>

                    <p className="mb-4">
                    Learn about our shipping methods, delivery times, and associated costs. We strive to provide accurate delivery estimates and transparent shipping practices.
                    </p>

                    <h2 className="text-2xl font-bold mb-2">Return and Refund Policy</h2>

                    <p className="mb-4">
                    We want you to be completely satisfied with your purchase. Our Return and Refund Policy outlines the process for returning items, seeking refunds or exchanges, and any associated conditions. 
                    </p>
                </div>
            </div>
        </section>
    )
}

export default page
