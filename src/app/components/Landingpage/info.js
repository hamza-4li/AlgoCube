const InfoSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Headings */}
        <h2 className="text-4xl font-bold text-center">
          The Ultimate Tech
        </h2>
        <h2 className="text-4xl font-bold text-center mb-8">
          Interview <span className="text-purple-600">Training</span> Ground
        </h2>
        
        {/* Paragraph */}
        <p className="text-lg text-gray-700 text-center mx-auto max-w-3xl mb-12">
          Welcome to DesignGurus.io, your comprehensive training hub for nailing tech interviews.
          We're your secret weapon in conquering system design, coding, and behavioral interviews,
          preparing you from every angle to land your dream job.
        </p>
        
        {/* Stats Grid */}
        <div className="flex flex-wrap justify-center">
          {/* Stat Card 1 */}
          <div className="w-full sm:w-1/2 lg:w-1/3">
            <div className="border border-white rounded-lg p-6 text-center shadow-sm">
              <h3 className="text-3xl font-semibold text-purple-600 text-bold">₹60LPA</h3>
              <p className="text-gray-600 mt-2">Average package</p>
            </div>
          </div>
          {/* Stat Card 2 */}
          <div className="w-full sm:w-1/2 lg:w-1/3">
            <div className="border border-white rounded-lg p-6 text-center shadow-sm">
              <h3 className="text-3xl font-semibold text-purple-600 text-bold">₹1.2 Crores</h3>
              <p className="text-gray-600 mt-2">Highest package</p>
            </div>
          </div>
          {/* Stat Card 3 */}
          <div className="w-full sm:w-1/2 lg:w-1/3">
            <div className="border border-white rounded-lg p-6 text-center shadow-sm">
              <h3 className="text-3xl font-semibold text-purple-600 text-bold">2x-5x</h3>
              <p className="text-gray-600 mt-2">Avg ROI on course price</p>
            </div>
          </div>
          {/* Stat Card 4 */}
          <div className="w-full sm:w-1/2 lg:w-1/3">
            <div className="border border-white rounded-lg p-6 text-center shadow-sm">
              <h3 className="text-3xl font-semibold text-purple-600 text-bold">17K+</h3>
              <p className="text-gray-600 mt-2">Experienced engineers enrolled</p>
            </div>
          </div>
          {/* Stat Card 5 */}
          <div className="w-full sm:w-1/2 lg:w-1/3">
            <div className="border border-white rounded-lg p-6 text-center shadow-sm">
              <h3 className="text-3xl font-semibold text-purple-600 text-bold">7</h3>
              <p className="text-gray-600 mt-2">Years of successful training in Silicon Valley</p>
            </div>
          </div>
          {/* Stat Card 6 */}
          <div className="w-full sm:w-1/2 lg:w-1/3">
            <div className="border border-white rounded-lg p-6 text-center shadow-sm">
              <h3 className="text-3xl font-semibold text-purple-600 text-bold">18</h3>
              <p className="text-gray-600 mt-2">Highest number of offers received by an alum</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
