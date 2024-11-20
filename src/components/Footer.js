
import React from "react";
import logo from "../assests/logo.png";
export default function Footer() {
  return (
    <footer className="bg-greey-700 text-white">
    
       
      <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
      <div className="flex md:items-center lg:items-start md:flex-row flex-wrap flex-col">
      <div className="w-64 flex-shrink-0 mx-auto text-center md:text-left md:mt-0 mt-10">
        <div className="md:w-2/3 flex flex-col items-start">
          <h2 className="text-lg mb-2">Subscribe to our FREE newsletter</h2>
          <p className="text-sm text-gray-400 mb-4">
            Sign up to receive the latest news, advice, and ads, straight to your inbox. You can unsubscribe at any time.
          </p>
          <input 
            type="email" 
            placeholder="Your Email" 
            className="border rounded px-3 py-2 mb-2 w-full" 
          />
          <label className="flex items-center mb-2">
            <input type="checkbox" className="mr-2" />
           Alos send me trusted promotions from 3rd party.
          </label>
          <button className="bg-red-600 text-white px-4 py-2 rounded mb-4">
            Subscribe
          </button>
         
        </div>
      </div>
       
          </div>
          <div class="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
    <h2 class="title-font font-bold text-white tracking-widest text-sm mb-3">For Sale</h2>
    <nav className="list-none mb-10">

  <li><a className="hover:text-white text-gray-600">Bicycles</a></li>
  <li><a className="hover:text-white text-gray-600">Computers & Electronics</a></li>
  <li><a className="hover:text-white text-gray-600">Furniture</a></li>
  <li><a className="hover:text-white text-gray-600">Home Appliances</a></li>
  <li><a className="hover:text-white text-gray-600">Musical Instruments</a></li>
  <li><a className="hover:text-white text-gray-600">Prams & Pushchairs</a></li>
</nav>

   
  </div>
  <div class="lg:w-1/4 md:w-1/2 w-full px-4">
    <h2 class="title-font font-bold text-white tracking-widest text-sm mb-3">Motors</h2>
    <nav class="list-none mb-10">
    <li><a className="hover:text-white text-gray-600">Cars</a></li>
    <li><a className="hover:text-white text-gray-600">RIBs & Inflatable Boats</a></li>
    <li><a className="hover:text-white text-gray-600">Motorhomes</a></li>
    <li><a className="hover:text-white text-gray-600">Caravans</a></li>
    </nav>
   
  </div>



  <div class="lg:w-1/4 md:w-1/2 w-full px-4">
    <h2 class="title-font font-bold text-white tracking-widest text-sm mb-3">Jobs</h2>
    <nav class="list-none mb-10">
   


      <li><a class="hover:text-white text-gray-600"> Childcare Jobs</a></li>
      <li><a class="hover:text-white text-gray-600">
      Education Jobs</a></li>
      <li><a class="hover:text-white text-gray-600">Healthcare & Medicine Jobs</a></li>
      <li><a class="hover:text-white text-gray-600">Health, Beauty & Fitness Jobs</a></li>
      <li><a class="hover:text-white text-gray-600">
      Home & Social Care Jobs</a></li>
    </nav>
   
  </div>

  <div class="lg:w-1/4 md:w-1/2 w-full px-4">
    <h2 class="title-font font-bold text-white tracking-widest text-sm mb-3">Services</h2>
    <nav class="list-none mb-10">
   


      <li><a class="hover:text-white text-gray-600"> Languages</a></li>
      <li><a class="hover:text-white text-gray-600">Garden Services</a></li>
      <li><a class="hover:text-white text-gray-600">Transport</a></li>
    
    </nav>
   
  </div>

  <div class="lg:w-1/4 md:w-1/2 w-full px-4">
    <h2 class="title-font font-bold text-white tracking-widest text-sm mb-3">Property </h2>
    <nav class="list-none mb-10">
 



      <li><a class="hover:text-white text-gray-600">   Houses & Bungalows</a></li>
      <li><a class="hover:text-white text-gray-600">Flats & Bedsits</a></li>
      <li><a class="hover:text-white text-gray-600">Rooms</a></li>
      <li><a class="hover:text-white text-gray-600">Commercial</a></li>
    </nav>
   
  </div>

  <div class="lg:w-1/4 md:w-1/2 w-full px-4">
    <h2 class="title-font font-bold text-white tracking-widest text-sm mb-3">Animals</h2>
    <nav class="list-none mb-10">



      <li><a class="hover:text-white text-gray-600">Cats & Kittens</a></li>
      <li><a class="hover:text-white text-gray-600">Dogs & Puppies</a></li>
      <li><a class="hover:text-white text-gray-600">Horses</a></li>
   
    </nav>
   
  </div>

  <div class="lg:w-1/4 md:w-1/2 w-full px-4">
    <h2 class="title-font font-bold text-white tracking-widest text-sm mb-3">Events</h2>
    <nav class="list-none mb-10">
   

      <li><a class="hover:text-white text-gray-600"> Car Boot Sales & Garage Sales</a></li>
     
    </nav>
   
  </div>
  <div class="lg:w-1/4 md:w-1/2 w-full px-4">
    <h2 class="title-font font-bold text-white tracking-widest text-sm mb-3">Adult</h2>
   
   
  </div>
  <div class="lg:w-1/4 md:w-1/2 w-full px-4">
    <h2 class="title-font font-bold text-white tracking-widest text-sm mb-3">Can we Help?</h2>
    <nav class="list-none mb-10">
      <li><a  href="/" class="hover:text-white text-gray-600">Home</a></li>
      <li><a href="/contact-us" class="hover:text-white text-gray-600">Contact us </a></li>
      <li><a href="/terms-and-conditions" class="hover:text-white text-gray-600">Terms & Conditions</a></li>
    
    </nav>
   
  </div>

  <div class="lg:w-1/4 md:w-1/2 w-full px-4">

    <nav class="list-none mb-10">
      <li><a  href="/" class="hover:text-white text-gray-600">Home</a></li>
      <li><a href="/dashboard" class="hover:text-white text-gray-600">Account </a></li>
      <li><a href="/collections" class="hover:text-white text-gray-600">Collections</a></li>
    
    </nav>
   
  </div>
  <div class="lg:w-1/4 md:w-1/2 w-full px-4 mt-8">
 
    <nav class="list-none mb-10">
      <li><a href="/about-us"  class="hover:text-white text-gray-600 ">About us </a></li>
      <li><a  href="/testimonials"  class="hover:text-white text-gray-600">Testimonials </a></li>
      <li><a href="/mediaPack"  class="hover:text-white text-gray-600">Media Pack</a></li>
    
    </nav>
   
  </div>
  <div class="lg:w-1/4 md:w-1/2 w-full px-4 mt-8">
 
 <nav class="list-none mb-10">
   <li><a href="/blogAll"  class="hover:text-white text-gray-600 ">Blog </a></li>
   <li><a  href="/privacy-policy"  class="hover:text-white text-gray-600">Privacy Policy </a></li>
   <li><a href="/help"  class="hover:text-white text-gray-600">Help</a></li>
 
 </nav>

</div>
<div class="lg:w-1/4 md:w-1/2 w-full px-4">
    <h2 class="title-font font-bold text-white tracking-widest text-sm mb-3">Suggested links</h2>
    <nav class="list-none mb-10">
      <li><a  href="/" class="hover:text-white text-gray-600">Free to collect</a></li>
    
    </nav>
   
  </div>
</div>

        </div>
       
        <div class="lg:w-1/4 md:w-1/2 w-full px-4 mt-8">
 
 <nav class="list-none mb-10">
   <li><a href="/blogAll"  class="hover:text-white text-gray-600 ">Collections </a></li>
 
 </nav>

</div>

        
        <div className="py-4">
  <div className="container mx-auto flex flex-wrap justify-center">
    <img src={logo} alt="Company Logo" className="h-10 mb-2" />
    <p className="text-gray-400 text-sm text-center">
      Friday Media Group Ltd, 80 East St, Brighton BN1 1NF - Copyright 2024 | dev [:] Memória Visual
    </p>
  </div>




        </div>
   
    </footer>
  );
}

