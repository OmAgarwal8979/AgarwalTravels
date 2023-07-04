import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return(
        <nav class="bg-blue-500">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">
      <div class="flex-shrink-0">
        <Link to="/" class="text-white font-bold text-xl">Agarwal Travels</Link>
      </div>
      <div class="hidden md:block">
        <div class="ml-10 flex items-baseline space-x-4">
          <Link to="/settings" class="text-white hover:text-gray-300">Hi Om!</Link>
          <Link to="/destinations" class="text-white hover:text-gray-300">Destinations</Link>
          <Link to="/packages" class="text-white hover:text-gray-300">Packages</Link>
          <Link to="/contacts" class="text-white hover:text-gray-300">Contact US</Link>
        </div>
      </div>
    </div>
  </div>
</nav>

    )
}

export default Navbar;