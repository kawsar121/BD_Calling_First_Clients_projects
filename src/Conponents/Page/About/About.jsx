

const About = () => {
    return (
        <section className="bg-pink-50 py-16 px-4 md:px-16 mt-10">
      <div className="max-w-5xl mx-auto text-center my-10">
        <h3 className="text-2xl font-semibold text-gray-800 mb-8">
          Welcome to <span className="text-pink-500">Cosmetics Products Shop</span> — where beauty, quality, and confidence come together.
        </h3>

        <p className="text-gray-700 text-lg mb-28 mt-10">
          <span className="font-semibold">Cosmetics Products Shop</span> started with a simple but powerful vision: <br />
          <span className="text-pink-500 font-medium">To enhance every individual’s natural beauty.</span>
        </p>

        <div className="grid md:grid-cols-3 gap-6 text-left mt-28 mb-32">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <h4 className="font-semibold text-pink-500 text-xl mb-2">Our Belief</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>True beauty begins with confidence.</li>
              <li>Healthy skin makes your beauty shine even more.</li>
              <li>Safe, effective, and trustworthy products for everyone.</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <h4 className="font-semibold text-pink-500 text-xl mb-2">Our Mission</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Not just makeup, but complete care for your skin.</li>
              <li>Deliver high-quality products made from the best ingredients.</li>
              <li>Make your beauty routine simple, safe, and enjoyable.</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <h4 className="font-semibold text-pink-500 text-xl mb-2">Our Philosophy</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Paraben-Free</li>
              <li>Cruelty-Free</li>
              <li>Dermatologically Tested</li>
              <li>Environmentally Friendly</li>
            </ul>
          </div>
        </div>

        <p className="text-gray-700 text-lg mt-8">
          When you choose <span className="font-semibold text-pink-500">Cosmetics Products Shop</span>, you don’t just get a product — you get an experience, confidence, and care.
        </p>

        <p className="text-gray-700 text-lg mt-4">
          Whether you want to upgrade your makeup, skincare, or overall beauty routine — <br />
          <span className="font-semibold text-pink-500">Cosmetics Products Shop</span> is your trusted companion.
        </p>

        <p className="text-pink-600 font-semibold text-xl mt-6">
          Let’s Glow Together!
        </p>
      </div>
    </section>
    );
};

export default About;