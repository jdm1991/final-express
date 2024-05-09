export default function About() {
  return (
    <>
      <main>
        <section className="about-intro py-32 sm:py-40 lg:py-48 bg-[#255036] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">
                About Us
              </h1>
              <p className="mt-4 max-w-3xl mx-auto text-xl">
                We are a small team of web developers and designers who enjoy
                building various types of websites across a wide range of
                industries. With a passion for creating engaging and
                user-friendly digital experiences, we strive to deliver
                exceptional results for our clients.
              </p>
            </div>
          </div>
        </section>

        <section className="about-location py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-3xl font-extrabold text-[#255036] sm:text-4xl">
                Located in the Heart of Norfolk, England
              </h2>
              <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600">
                Nestled in the picturesque county of Norfolk, our team is proud
                to call this beautiful region our home. From the charming
                streets of Norwich to the stunning coastline, we draw
                inspiration from our surroundings to create websites that
                reflect the unique character of our clients and their
                businesses.
              </p>
            </div>
          </div>
        </section>

        <section className="about-approach py-12 sm:py-16 lg:py-20 bg-[#255036] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-3xl font-extrabold sm:text-4xl">
                Our Approach
              </h2>
              <p className="mt-4 max-w-3xl mx-auto text-xl">
                As a small and attentive business, we pride ourselves on paying
                close attention to the needs of people and businesses. We
                believe in communicating like actual human beings, not corporate
                monsters. Our goal is to build long-lasting relationships with
                our clients, understanding their unique requirements and
                delivering tailored solutions that exceed their expectations.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
