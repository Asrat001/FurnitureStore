"use client";

import { Footer } from "@/Compontes/Footer";
import { Hero } from "@/Compontes/Hero";
import { ProductSection } from "@/Compontes/ProductSection";

export default function Home(){
  
        return (
          
        <div className="relative overflow-hidden">
         <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-100 to-neutral-50 opacity-90"></div>
            <div className="absolute inset-0 dot-pattern"></div>
        </div>
        <Hero/>
         {/* Product Grid Section */}
        <ProductSection/>
          {/* footer */}
         <Footer/>
           
      
                  

          </div>
        );
      }
