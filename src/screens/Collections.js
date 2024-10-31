import React from "react";
import Footer from "../components/Footer";
import HeaderSecond from "../components/HeaderSecond";
export default function Collections() {
  return <>
  <HeaderSecond/>

      {/* first  */}
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <div class="text-center lg:w-2/3 w-full">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Microdosing synth tattooed vexillologist
            </h1>
            <p class="mb-8 leading-relaxed">
              Meggings kinfolk echo park stumptown DIY, kale chips beard
              jianbing tousle
            </p>
          </div>
        </div>
      </section>
      {/* second */}
      <div>
        <h1 class="text-3xl font-medium title-font text-gray-900 mb-12 text-left">
          Testimonials
        </h1>
        <section class="text-gray-600 body-font border-2 border-gray-300 rounded-lg">
          <div class="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
            <img
              class="w-full h-full mb-10 object-cover object-center rounded border-2 border-gray-300"
              alt="hero"
              src="https://dummyimage.com/1200x800"
            />
            <div class="w-full md:w-2/3 flex flex-col items-start text-left">
              <h1 class="title-font text-3xl font-bold text-gray-900 mb-2">
                Bold Headline Text Here
              </h1>
              <p class="text-base font-medium text-gray-700 mb-4">
                A short, bold description with 5 words.
              </p>
              <button class="inline-flex text-gray-600 bg-gray-200 border border-gray-300 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg mb-4">
                Button
              </button>
              <p class="leading-relaxed">
                This is a longer paragraph providing additional information.
                It’s formatted to be easy to read, allowing space for more text
                to give users a clear overview. Include as many details as
                necessary here.
              </p>
            </div>
          </div>
        </section>
      </div>
      {/* third */}
      <div>
        <h1 class="text-3xl font-medium title-font text-gray-900 mb-12 text-left">
          Testimonials
        </h1>
        <section class="text-gray-600 body-font border-2 border-gray-300 rounded-lg">
          <div class="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
            <img
              class="w-full h-full mb-10 object-cover object-center rounded border-2 border-gray-300"
              alt="hero"
              src="https://dummyimage.com/1200x800"
            />
            <div class="w-full md:w-2/3 flex flex-col items-start text-left">
              <h1 class="title-font text-3xl font-bold text-gray-900 mb-2">
                Bold Headline Text Here
              </h1>
              <p class="text-base font-medium text-gray-700 mb-4">
                A short, bold description with 5 words.
              </p>
              <button class="inline-flex text-gray-600 bg-gray-200 border border-gray-300 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg mb-4">
                Button
              </button>
              <p class="leading-relaxed">
                This is a longer paragraph providing additional information.
                It’s formatted to be easy to read, allowing space for more text
                to give users a clear overview. Include as many details as
                necessary here.
              </p>
            </div>
          </div>
        </section>
      </div>
    
  <Footer/>
  
  
  </>;
}
