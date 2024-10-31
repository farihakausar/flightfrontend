import React from "react";
import Footer from "../components/Footer";
import HeaderSecond from "../components/HeaderSecond";
export default function GetSingleBlog() {
  return <>
  <HeaderSecond/>
  <div className="font-sans">
        <header className="bg-gray-100 py-4 border-b">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-3xl font-bold text-green-600">FRIDAY AD</h1>
            <nav className="space-x-4">
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Top Stories
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Categories
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Write for us
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Go to Friday-Ad
              </a>
            </nav>
          </div>
        </header>
        <div className="container mx-auto px-4 py-8 grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <div>
              <h2 className="text-4xl font-semibold mb-4">
                Pompoko Brighton Review
              </h2>
              <p className="text-gray-600 mb-8">
                by Marketing Team | May 28, 2024 | Activities, Brighton & Hove,
                Top Stories | 0 comments
              </p>
              <img
                src="path-to-main-image.jpg"
                alt="Pompoko Brighton"
                className="w-full rounded-lg mb-8"
              />

              <section className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">
                  Pompoko Brighton
                </h3>
                <p>Welcome to the Friday-Ad restaurant review series!Welcome to the Friday-Ad restaurant review series!Welcome to the Friday-Ad restaurant review series!Welcome to the Friday-Ad restaurant review series!Welcome to the Friday-Ad restaurant review series! ...</p>
              </section>

              <section className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">Location</h3>
                <p>Conveniently located in the heart of the city,Welcome to the Friday-Ad restaurant review series!Welcome to the Friday-Ad restaurant review series!Welcome to the Friday-Ad restaurant review series!Welcome to the Friday-Ad restaurant review series!Welcome to the Friday-Ad restaurant review series! ...</p>
                <img
                  src="path-to-location-image.jpg"
                  alt="Location"
                  className="w-full rounded-lg mb-4"
                />
              </section>

              <section className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">Space</h3>
                <p>
                  Experience quick service and a variety of seating options Welcome to the Friday-Ad restaurant review series!Welcome to the Friday-Ad restaurant review series!Welcome to the Friday-Ad restaurant review series!v...
                </p>
                <img
                  src="path-to-space-image.jpg"
                  alt="Space"
                  className="w-full rounded-lg mb-4"
                />
              </section>

              {/* More sections like Menu, Meal, Conclusion */}

              <section className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">
                  Submit a Comment
                </h3>
                <form className="space-y-4">
                  <textarea
                    className="w-full border border-gray-300 rounded-lg p-4"
                    placeholder="Comment"
                    rows="4"
                  ></textarea>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg p-4"
                    placeholder="Name"
                  />
                  <input
                    type="email"
                    className="w-full border border-gray-300 rounded-lg p-4"
                    placeholder="Email"
                  />
                  <button className="bg-green-600 text-white rounded-lg py-2 px-6 hover:bg-green-700">
                    Submit Comment
                  </button>
                </form>
              </section>
            </div>
          </div>
          <div className="lg:col-span-1">
            <aside className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">Recent Posts</h3>
              <div>
                <a
                  href="#"
                  className="block text-gray-800 hover:text-green-600"
                >
                  Sussex Health Food Stores...
                </a>
                <a
                  href="#"
                  className="block text-gray-800 hover:text-green-600"
                >
                  Find your Zen at these...
                </a>
                <a
                  href="#"
                  className="block text-gray-800 hover:text-green-600"
                >
                  Sussex's Sustainable...
                </a>
              </div>
            </aside>
          </div>
        </div>
        <footer className="bg-gray-100 py-6 mt-8">
          <div className="container mx-auto text-center space-y-4">
            <p>&copy; 2011-2024 Friday Media Group Ltd. All rights reserved.</p>
            <nav className="space-x-4">
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Write for us
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                About us
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Go to Friday-Ad
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Place an ad in Friday-Ad
              </a>
            </nav>
          </div>
        </footer>
      </div>

  <Footer/>
  
  
  </>;
}
