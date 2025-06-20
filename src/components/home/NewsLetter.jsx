const NewsLetter = () => {
  return (
    <section className="w-full bg-black flex justify-center h-[250px]">
      <div className="w-full max-w-7xl flex flex-col sm:flex-row items-center justify-center sm:justify-between space-y-5 sm:space-y-0 py-6 px-4 xl:px-2">
        <div className="space-y-2 sm:space-y-4 text-center sm:text-left">
          <h3 className="text-white text-2xl sm:text-4xl">Sign up to our newsletter</h3>
          <p className="text-white text-xs sm:text-base">Get updates on new collections & 20% off</p>
        </div>
        <button className="bg-white text-sm sm:text-2xl py-3 px-8 hover:bg-black hover:text-white hover:border hover:border-amber-50 transition-all duration-300 cursor-pointer">
          Sign up
        </button>
      </div>
    </section>
  );
};

export default NewsLetter;
