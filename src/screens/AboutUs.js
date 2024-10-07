import React from "react";

export default function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-8 font-poppins">
      <h1 className="text-black text-4xl font-bold text-left border-b border-gray-300 pb-2 mb-4">
        About Friday-Ad
      </h1>

      <div className="border-b border-black pb-2 mb-4">
        <p className="text-gray-500 font-bold">Last updated: 21st May 2018</p>
      </div>
      <p className="text-gray-700 mb-4">
        The majority of the Personal Information you provide to us freely when
        you submit to us your advertisement copy or enquire about an item or
        service via the website. If there is any information you would prefer us
        not to have, please omit this from any submissions sent to us. Some
        personal data is necessary for us to create an account for you, so in
        the instance where you do not want to share this Personal Information,
        we will be unable to provide our services to you.
      </p>
      <p className="text-gray-700 mb-4">
        Some information we collect and store, whilst voluntarily given by
        yourself, may have been unintentional, such as information divulged
        through the use of search tools and content you interact with.
      </p>
      <h5 className="text-black  text-left pb-2 mb-2">About us</h5>

      <p className="text-gray-700 mb-4">
        Some information we collect and store, whilst voluntarily given by
        yourself, may have been unintentional, such as information divulged
        through the use of search tools and content you interact with.
      </p>
      <p className="text-gray-700 mb-4">
        Some information we collect and store, whilst voluntarily given by
        yourself, may have been unintentional,
        <span className="font-bold">
          {" "}
          such as information divulged through the
        </span>{" "}
        use of search tools and content you interact with.
      </p>
      <p className="text-gray-700 mb-4">
        Some information we collect and store, whilst voluntarily given by
        yourself, may have been unintentional, such as information divulged
        through the use of search tools and content you interact with.
      </p>
    </div>
  );
}
