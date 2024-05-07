export default function WebsiteDesign() {
  return (
    <div className="pt-16 lg:pt-24">
      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Website Design</h1>
          <p className="text-xl mb-8">
            We create stunning and functional websites tailored to your needs.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <div className="p-8">
                  <h2 className="text-3xl font-bold mb-4">
                    Basic Website Package
                  </h2>
                  <p className="text-lg mb-4">
                    Our basic website package includes a modern and responsive
                    design built with the latest technologies.
                  </p>
                  <ul className="list-disc pl-6 mb-6">
                    <li>5 pages</li>
                    <li>Responsive design</li>
                    <li>Contact form</li>
                    <li>Basic SEO optimization</li>
                  </ul>
                  <p className="text-lg font-bold mb-4">
                    Built with: HTML, CSS, JavaScript
                  </p>
                  <p className="text-lg mb-4">
                    Estimated price: $1,000 - $1,500
                  </p>
                </div>
              </div>
              <div className="md:flex-1 bg-green-500 text-white p-8">
                <h3 className="text-2xl font-bold mb-4">Package Includes:</h3>
                <ul className="list-disc pl-6 mb-6">
                  <li>Custom design</li>
                  <li>Mobile-friendly layout</li>
                  <li>Content management system</li>
                  <li>Free domain for 1 year</li>
                </ul>
                <button className="bg-white text-green-500 font-bold py-2 px-4 rounded hover:bg-green-600 hover:text-white transition duration-300">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
