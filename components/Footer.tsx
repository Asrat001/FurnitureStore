import React from 'react'

export const Footer = () => {
  return (
    <footer id="catalog" className="bg-black text-gray-300 relative z-10 ">
       
    <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-14 sm:px-6 lg:px-8">
            <div className="lg:flex lg:items-center lg:justify-between">
                <div className="max-w-2xl">
                    <h3 className="text-3xl font-semibold text-white mb-2">
                        Join our newsletter
                    </h3>
                    <p className="text-gray-400">
                        Stay updated with our latest trends, exclusive offers and interior design tips.
                    </p>
                </div>
                <div className="mt-8 lg:mt-0">
                    <form className="sm:flex">
                        <div className="min-w-0 flex-1">
                            <input type="email" 
                                   className="footer-input block w-full px-5 py-3 text-base text-gray-300 placeholder-gray-500 border border-transparent rounded-l-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent" 
                                   placeholder="Enter your email"/>
                        </div>
                        <div className="mt-3 sm:mt-0 sm:ml-3">
                            <button className="block w-full px-5 py-3 text-base font-medium text-white bg-amber-600 border border-transparent rounded-r-lg hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 sm:px-10">
                                Subscribe
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
                <h4 className="text-lg font-semibold text-white mb-6">About Us</h4>
                <p className="text-gray-400 mb-6">
                    Crafting comfortable spaces with elegant furniture since 1995. We believe in quality, design, and sustainability.
                </p>
                <div className="flex space-x-4">
                    <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                        <i className="fab fa-pinterest-p"></i>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                        <i className="fab fa-twitter"></i>
                    </a>
                </div>
            </div>
            <div>
                <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
                <ul className="space-y-4">
                    <li>
                        <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">About Us</a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Collections</a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Delivery Info</a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Return Policy</a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Help Center</a>
                    </li>
                </ul>
            </div>
            <div>
                <h4 className="text-lg font-semibold text-white mb-6">Categories</h4>
                <ul className="space-y-4">
                    <li>
                        <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Living Room</a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Bedroom</a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Kitchen</a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Office</a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Outdoor</a>
                    </li>
                </ul>
            </div>
            <div>
                <h4 className="text-lg font-semibold text-white mb-6">Contact Us</h4>
                <ul className="space-y-4">
                    <li className="flex items-start space-x-3">
                        <i className="fas fa-map-marker-alt mt-1 text-amber-500"></i>
                        <span className="text-gray-400">123 Furniture Street, Design District, City, Country</span>
                    </li>
                    <li className="flex items-center space-x-3">
                        <i className="fas fa-phone-alt text-amber-500"></i>
                        <span className="text-gray-400">+1 234 567 890</span>
                    </li>
                    <li className="flex items-center space-x-3">
                        <i className="fas fa-envelope text-amber-500"></i>
                        <span className="text-gray-400">info@furniturebrand.com</span>
                    </li>
                    <li className="flex items-center space-x-3">
                        <i className="fas fa-clock text-amber-500"></i>
                        <span className="text-gray-400">Mon - Sat: 9:00 - 18:00</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>

 
    <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
            <div className="md:flex md:items-center md:justify-between">
                <div className="flex justify-center space-x-6 md:order-2">
                    <img src="payment-visa.svg" alt="Visa" className="h-8"/>
                    <img src="payment-mastercard.svg" alt="Mastercard" className="h-8"/>
                    <img src="payment-amex.svg" alt="American Express" className="h-8"/>
                    <img src="payment-paypal.svg" alt="PayPal" className="h-8"/>
                </div>
                <div className="mt-8 md:mt-0 md:order-1">
                    <p className="text-center text-gray-400">
                        © 2024 Furniture Brand. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    </div>
</footer>
  )
}
