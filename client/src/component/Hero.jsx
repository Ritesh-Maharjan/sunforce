function Hero() {
  return (
    <div className="h-[80vh] object-cover">
      <div className=" h-screen w-full flex flex-col justify-center px-10">
        <div className="md:w-[750px] p-10 bg-gray-700 rounded-lg bg-opacity-50 md:text-xl">
          <h2 className="text-3xl lg:text-5xl font-black text-blue-900">
            Join the solar energy revolution
          </h2>
          <p className="my-10 text-green-400  lg:text-xl font-bold ">
            We're transforming access to renewable energy with simple, powerfull
            solar solutions for homes, business and communities.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
