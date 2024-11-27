import React from 'react';

const WriteForus = () => {
  return (
    <div className="font-sans">
      {/* Header Section */}
      <header className="bg-white shadow-md py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold text-green-600">FRIDAY<span className="text-black">AD</span></h1>
          <nav className="space-x-4 text-sm text-gray-700">
            <a href="#" className="hover:text-green-600">Top Stories</a>
            <a href="#" className="hover:text-green-600">Categories</a>
            <a href="#" className="text-green-600">Write for us</a>
            <a href="#" className="hover:text-green-600">Go to Friday-Ad</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-orange-500 text-white py-16 mx-6">
  <div className="container mx-auto px-4 flex flex-wrap items-center">
    {/* Text Content */}
    <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
      <h2 className="text-4xl font-bold mb-4 text-left">Write for us</h2>
      <p className="text-lg text-left">
        Got something to share? Are you an expert in your area or have a passion for something and want to share your stories with Friday-Ad’s growing community? We want to hear from you!
      </p>
    </div>
    {/* Image Content */}
    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
      <img
        src="https://via.placeholder.com/200"
        alt="Write for us"
        className="rounded shadow-lg"
      />
    </div>
  </div>
</section>


      {/* Information Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-8">We are looking for Blog Contributors</h3>
          <p className="mb-4">
            Are you wanting to share advice or stories to Friday-Ad’s growing local and global community? Get in touch with us!
          </p>
          <p className="mb-8">
            Topics include: <strong>Home and Garden, Upcycling, Antiques, Pets/Animals, Motors, Leisure, Beauty, Fashion, Baby and Kids, Community, Events, Jobs, Recruitment and Property Services</strong>.
          </p>
          <div className="flex justify-center">
            <img
              src="https://via.placeholder.com/300x200" 
              alt="Illustration"
              className="rounded shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 flex flex-wrap items-center">
          <div className="w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
            <h4 className="text-2xl font-bold">Why write for Friday-Ad?</h4>
            <p className="text-gray-700">
              By writing content for us, your post will be published on our site that receives over <strong>1.5 million visits a month</strong>. Plus, we promote content to maximize your exposure!
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <form className="bg-gray-100 p-8 rounded shadow-md">
              <input
                type="text"
                placeholder="Name"
                className="w-full mb-4 p-3 border rounded focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full mb-4 p-3 border rounded focus:outline-none"
              />
              <input
                type="text"
                placeholder="Proposed Title"
                className="w-full mb-4 p-3 border rounded focus:outline-none"
              />
              <textarea
                placeholder="Briefly tell us about your idea"
                className="w-full mb-4 p-3 border rounded focus:outline-none"
              />
              <button className="bg-green-500 text-white py-2 px-4 rounded w-full">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Our Writers Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h4 className="text-2xl font-bold text-center mb-12">Our Writers</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Writer Card */}
            {writers.map((writer, index) => (
              <div key={index} className="bg-white p-6 shadow-lg rounded text-center">
                <img
                  src={writer.image}
                  alt={writer.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h5 className="text-lg font-bold">{writer.name}</h5>
                <p className="text-gray-700 text-sm">{writer.description}</p>
                <button className="bg-green-500 text-white py-2 px-4 rounded mt-4">
                  View Articles
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <nav className="mb-4 space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">Write for us</a>
            <a href="#" className="text-gray-400 hover:text-white">About us</a>
            <a href="#" className="text-gray-400 hover:text-white">Go to Friday-Ad</a>
            <a href="#" className="text-gray-400 hover:text-white">Place an ad</a>
          </nav>
          <p className="text-gray-500 text-sm">
            &copy; 2011-2024 Friday Media Group Ltd. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

// Writers Data
const writers = [
  {
    name: "Adelle Tracey",
    image: "https://via.placeholder.com/150",
    description: "Adelle is a professional hair and makeup artist..."
  },
  {
    name: "Sarah Lawson",
    image: "https://via.placeholder.com/150",
    description: "Sarah works for 'bubbl' a content and digital marketing business..."
  },
  {
    name: "Kirsten Hubert",
    image: "https://via.placeholder.com/150",
    description: "Kirsten is a blogger passionate about upcycling..."
  },
  {
    name: "Crockerz Events",
    image: "https://via.placeholder.com/150",
    description: "Crockerz is a premium events company..."
  },
  {
    name: "Beth Kidger",
    image: "https://via.placeholder.com/150",
    description: "Beth is part of the marketing team at Friday-Ad..."
  },
  {
    name: "Katie Thomas",
    image: "https://via.placeholder.com/150",
    description: "Katie is a qualified Nanny passionate about supporting parents..."
  }
];

export default WriteForus;
