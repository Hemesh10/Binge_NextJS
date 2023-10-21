import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col sm:flex-row justify-between items-center py-6 sm:py-8 px-3 sm:px-32 gap-8">
      <div className="left flex flex-col items-center gap-2 sm:gap-6">
        <h1 className="text-base sm:text-lg text-white">
          <span className="text-xl sm:text-2xl font-semibold">S</span>how{" "}
          <span className="text-xl sm:text-2xl font-semibold">S</span>couts
        </h1>
        <div className="main-msg text-center">
          <h1 className="text-base sm:text-lg text-white">
            This website was made for learning purposes
          </h1>
          <h1 className="text-base sm:text-lg text-white">
            using{" "}
            <Link
              href={"https://developer.themoviedb.org/docs"}
              target="_blank"
              className="bg-clip-text bg-gradient-to-r text-transparent from-green-300 to-sky-400"
            >
              TMDB API's
            </Link>
          </h1>
        </div>
      </div>
      <div className="right flex flex-col items-center gap-2">
        <div className="personal-msg">
          <h1 className="text-base text-white">
            Made by <span className="font-bold">Hemesh Thakur</span>
          </h1>
        </div>
        <div className="socails flex gap-6">
          <Link
            href={`https://www.linkedin.com/in/hemesh-thakur-721705228`}
            target="_blank"
          >
            <i className="ri-linkedin-box-fill text-2xl text-white"></i>
          </Link>
          <Link href={`https://twitter.com/RoronoaHemesh`} target="_blank">
            <i className="ri-twitter-fill text-2xl text-white"></i>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
