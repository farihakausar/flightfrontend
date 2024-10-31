import React from "react";
import Footer from "../components/Footer";
import HeaderSecond from "../components/HeaderSecond";
import logo from "../assests/logo.png";
export default function Blog() {
  return <> 

{/* header */}
<header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <img src={logo} alt="Company Logo" className="h-10 mb-2" />
      
    </a>
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a class="mr-5 hover:text-gray-900">Top stories</a>
      <a class="mr-5 hover:text-gray-900">write for us k</a>
      <a class="mr-5 hover:text-gray-900">categories</a>
      <a class="mr-5 hover:text-gray-900">Go to firday add</a>
    </nav>
  
  </div>
</header>
{/* hader end  */}
{/* man ssection */}
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

{/* maian section end */}
<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap">
    <div class="flex w-full mb-20 flex-wrap">
      <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Popular categories</h1>
    </div>
    
    <div class="flex justify-center w-full">
      <div class="flex space-x-4">
        <div class="hover:bg-black hover:text-white border border-gray-300 p-4 rounded-lg cursor-pointer transition duration-300">
          Home & DIY
        </div>
        <div class="hover:bg-black hover:text-white border border-gray-300 p-4 rounded-lg cursor-pointer transition duration-300">
          Business
        </div>
        <div class="hover:bg-black hover:text-white border border-gray-300 p-4 rounded-lg cursor-pointer transition duration-300">
          Motors
        </div>
        <div class="hover:bg-black hover:text-white border border-gray-300 p-4 rounded-lg cursor-pointer transition duration-300">
          Animals
        </div>
        <div class="hover:bg-black hover:text-white border border-gray-300 p-4 rounded-lg cursor-pointer transition duration-300">
          Work
        </div>
        <div class="hover:bg-black hover:text-white border border-gray-300 p-4 rounded-lg cursor-pointer transition duration-300">
          Events
        </div>
      </div>
    </div>
  </div>
</section>

{/* popuar catfeoeis  */}
{/* recents posts  */}
<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap">
    <div class="flex w-full mb-20 flex-wrap">
      <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 text-center lg:w-1/3 lg:mb-0 mb-4">Recent Posts</h1>
     
    </div>
    <div class="flex flex-wrap md:-m-2 -m-1">
  <div class="flex flex-wrap w-1/2">
    <div class="md:p-2 p-1 w-full">
      <img alt="gallery" class="w-full h-auto object-cover object-center block" src="https://dummyimage.com/700x360"/>
      <div class="mt-2 text-center">
        <p>Marketing Team | May 28, 2024</p>
        <h3>Pompoko Brighton</h3>
        <p>Welcome to the Friday-Ad restaurant review series! If there's a restaurant, pub or café you want us to review, let us know in the comments. Today, we’re featuring one of our absolute favourite places to eat; the Japanese restaurant, Pompoko Brighton....</p>
        <a href="/singleBlog" class="text-green-500">read more</a>
      </div>
    </div>
  </div>
  <div class="flex flex-wrap w-1/2">
    <div class="md:p-2 p-1 w-full">
      <img alt="gallery" class="w-full h-full object-cover object-center block" src="https://dummyimage.com/501x361"/>
      <div class="mt-2 text-center">
        <p>Marketing Team | May 28, 2024</p>
        <h3>Pompoko Brighton</h3>
        <p>Welcome to the Friday-Ad restaurant review series! If there's a restaurant, pub or café you want us to review, let us know in the comments. Today, we’re featuring one of our absolute favourite places to eat; the Japanese restaurant, Pompoko Brighton....</p>
        <a href="#" class="text-green-500">read more</a>
      </div>
    </div>
  </div>
</div>

  </div>
</section>
{/* recne post end  */}
  {/* scetio */}
  <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col">
     
    </div>
    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
      <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src="https://dummyimage.com/1203x503"/>
        </div>
        <h2 class="text-xl font-medium title-font text-gray-900 mt-5">Shooting Stars</h2>
        <p class="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
        <a class="text-indigo-500 inline-flex items-center mt-3">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src="https://dummyimage.com/1204x504"/>
        </div>
        <h2 class="text-xl font-medium title-font text-gray-900 mt-5">The Catalyzer</h2>
        <p class="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
        <a class="text-indigo-500 inline-flex items-center mt-3">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src="https://dummyimage.com/1205x505"/>
        </div>
        <h2 class="text-xl font-medium title-font text-gray-900 mt-5">The 400 Blows</h2>
        <p class="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
        <a class="text-indigo-500 inline-flex items-center mt-3">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
</section>
{/* contact us  */}
<section class="text-gray-600 body-font relative bg-pink-400 m-20">
  <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    
    <div class=" relative flex flex-wrap py-3 rounded shadow-md">
      <img alt="gallery" class="w-full h-auto object-cover object-center block" src="https://dummyimage.com/400x200" />
    </div>
 
    <div class="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 text-white">
      <h2 class="text-lg mb-1 text-xl text-pink-700 font-medium title-font">Have you got any news for us?</h2>
      <p class="leading-relaxed mb-5">Send us your community news</p>
      <div class="relative mb-4">
        <label for="name" class="leading-7 text-sm">Name</label>
        <input type="text" id="name" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="relative mb-4">
        <label for="email" class="leading-7 text-sm">Email</label>
        <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="relative mb-4">
        <label for="message" class="leading-7 text-sm">Message</label>
        <textarea id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button class="text-white bg-green-500 border-0 py-2 px-6 rounded text-lg">Submit</button>
    </div>
  </div>
</section>


{/* footer */}
<footer className="bg-gray-800 text-white py-6 px-4">
    <div className="flex justify-around flex-wrap">
        <div className="footer-item mx-4 my-2">About us</div>
        <div className="footer-item mx-4 my-2">Go to Friday-Ad</div>
        <div className="footer-item mx-4 my-2">Place an ad in Friday-Ad</div>
        <div className="footer-item mx-4 my-2">Write for us</div>
    </div>
    <div className="mt-6 text-center">
        <p>© 2011-2021 Friday Media Group Ltd. All rights reserved.</p>
    </div>
</footer>

  </>
}
