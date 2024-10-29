import React from "react";
import Footer from "../components/Footer";
import HeaderSecond from "../components/HeaderSecond";
const PrivacyPolicy = () => {
  return (
    <>
    <HeaderSecond/>
    <div className="bg-white p-6">
      {/* Main Heading */}
      <h1 className="text-black text-4xl font-bold text-left border-b border-gray-300 pb-2 mb-4">
        Privacy Policy
      </h1>

      {/* Last Updated Section */}
      <div className="border-b border-black pb-2 mb-4">
        <p className="text-gray-500 font-bold">Last updated: 21st May 2018</p>
      </div>

      {/* Content Section */}
      <p className="text-gray-700 mb-4">
        Friday-Ad is part of Friday Media Group Ltd and is a classified ads
        marketplace established to accurately match item sellers and service
        providers with a relevant buying audience.
      </p>
      <p className="text-gray-700 mb-4">
        When you submit information to Friday-Ad, your information will also be
        shared with other relevant marketplace sites that form part of the
        Friday Media Group portfolio. Any such sites will also use your
        information in accordance with this Privacy Policy. Friday-Ad will
        remain responsible for the management and security of jointly used
        Personal Information that you submit to Friday-Ad.
      </p>
      <p className="text-gray-700 mb-4">
        We take data protection very seriously and understand the importance of
        protecting your privacy and Personal Information.{" "}
        <span className="font-bold italic">"Personal Information"</span> is
        information that identifies you as an individual such as your name, date
        of birth, email address, IP address, and telephone number.
      </p>

      {/* Thin Divider */}
      <hr className="border-gray-300 mb-4" />

      {/* Section Heading */}
      <h2 className="text-black text-2xl font-semibold mb-2">
        How do we collect information from you?
      </h2>
      <p className="text-gray-700 mb-4">
        We collect and use your Personal Information in accordance with this
        Privacy Policy.
      </p>

      {/* Paragraph */}
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

      {/* Divider */}
      <hr className="border-gray-300 mb-4" />

      {/* New Section with headings and paragraphs */}
      <h2 className="text-black text-2xl font-semibold mb-2 underline">
        Other sources we use also include:
      </h2>

      {/* List of Sources */}
      <p className="text-gray-700 mb-4">
        <span className="font-bold">Our group websites</span>: The software
        applications made available by us for use on or through computers and
        mobile devices
      </p>
      <p className="text-gray-700 mb-4">
        <span className="font-bold">Publicly available information</span>;
      </p>
      <p className="text-gray-700 mb-4">
        <span className="font-bold">Cookies</span> (see our Cookie Policy for
        more information on how we use Cookies)
      </p>
      <p className="text-gray-700 mb-4">
        <span className="font-bold">Other tools and applications</span>
      </p>

      {/* New Heading */}
      <h2 className="text-black text-2xl font-semibold mb-2 underline">
        What Personal Information do we collect?
      </h2>

      {/* Personal Information Paragraphs */}
      <p className="text-gray-700 mb-4">
        <span className="font-bold italic">
          General identification and contact information
        </span>
        : your name; address; email; IP address; telephone details; gender;
        marital status; family status; date and place of birth; physical
        attributes including photos
      </p>
      <p className="text-gray-700 mb-4">
        <span className="font-bold italic">Other sensitive information</span>:
        political opinions, racial or ethnic origin, trade union membership,
        religious beliefs, and criminal record.
      </p>
      <p className="text-gray-700 mb-4">
        <span className="font-bold italic">
          Information enabling us to provide products and services
        </span>
        : age, location, whether or not you hold a driving licence
      </p>
      <p className="text-gray-700 mb-4">
        <span className="font-bold italic">Information from Apps</span>: User
        generated content submitted through contributing to online forums,
        commenting on blog posts, completing onsite forms, or emailing any of
        our internal services teams
      </p>
      <p className="text-gray-700 mb-4">
        <span className="font-bold italic">
          Professional history information available publicly
        </span>
        : educational background; employment history; skills and experience;
        professional licenses and affiliations; educational and professional
        qualifications
      </p>
      <p className="text-gray-700 mb-4">
        <span className="font-bold italic">Marketing preferences</span>: defined
        when entering a competition or prize draw, submitting a survey response,
        or other sales/marketing promotional activity
      </p>
      <p className="text-gray-700 mb-4">
        <span className="font-bold italic">Statistical information</span>:
        aggregate statistical information about site visitors and users for
        internal use and for other lawful purposes such as salary comparison
        services. Where we utilize such information, we will do so using an
        anonymous format and not include any Personal Information.
      </p>
    </div>
    <Footer/>
    </>
  );
};

export default PrivacyPolicy;
