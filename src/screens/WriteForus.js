import React from "react";
import logo from "../assests/logo.png";
const WriteForus = () => {
  return (
   <>
   <header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <img src={logo} alt="Company Logo" className="h-10 mb-2" />
      
    </a>
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a class="mr-5 hover:text-gray-900">Top stories</a>
      <a href="/write-for-us" class="mr-5 hover:text-gray-900">write for us k</a>
      <a class="mr-5 hover:text-gray-900">categories</a>
      <a class="mr-5 hover:text-gray-900">Go to firday add</a>
    </nav>
  
  </div>
</header>
   <section class="text-white-600 body-font bg-pink-400" >
  <div class="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-2xl mb-4 font-medium text-white">Explore the Friday-Ad Blog Online</h1>
     
      <div class="flex w-full md:justify-start justify-center items-end">
        <div class="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4">
          <input type="text" placeholder="Read about" id="hero-field" name="hero-field" class="w-full bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <button class="inline-flex text-white bg-green-500 border-0 py-2  focus:outline-none rounded text-lg">Search</button>
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 text-right">
      <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/400x400"/>
    </div>
  </div>
</section>
   
   </>
  );
};

export default WriteForus;
