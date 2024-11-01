import React from 'react'

export const Hero = () => {
  return (
            <section className="flex flex-col md:flex-row items-center mb-16 justify-between">
            <div className="relative z-10 px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-32">
            <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
              
                <div className="max-w-2xl">
                    <span className="inline-block px-4 py-2 mb-6 text-sm font-medium tracking-wider text-amber-700 uppercase bg-amber-100 rounded-full font-inter">
                        New Collection 2024
                    </span>
                    <h1 className="mb-6 text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl font-playfair">
                        Where Comfort Meets Elegance
                    </h1>
                    <p className="mb-8 text-lg text-gray-600 font-inter">
                        Transform your living space with our curated collection of contemporary and classNameic furniture. Each piece tells a story of craftsmanship, comfort, and timeless design.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <a href="#shop" className="px-8 py-4 text-sm font-semibold text-white transition-all bg-gray-900 rounded-full hover:bg-gray-800 font-inter">
                            Shop Collection
                        </a>
                        <a href="#catalog" className="px-8 py-4 text-sm font-semibold text-gray-900 transition-all border border-gray-300 rounded-full hover:bg-gray-100 font-inter">
                            View Catalog
                        </a>
                    </div>
                  
                    <div className="grid grid-cols-3 gap-8 mt-12 sm:gap-12">
                        <div>
                            <p className="mb-1 text-2xl font-bold text-gray-900 font-playfair">15k+</p>
                            <p className="text-sm text-gray-600 font-inter">Happy Customers</p>
                        </div>
                        <div>
                            <p className="mb-1 text-2xl font-bold text-gray-900 font-playfair">5k+</p>
                            <p className="text-sm text-gray-600 font-inter">Furniture Pieces</p>
                        </div>
                        <div>
                            <p className="mb-1 text-2xl font-bold text-gray-900 font-playfair">98%</p>
                            <p className="text-sm text-gray-600 font-inter">Positive Reviews</p>
                        </div>
                    </div>
                </div>
                </div>
                </div>
            </section>
  )
}
