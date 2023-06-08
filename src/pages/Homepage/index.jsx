import { Button } from "../../components/Atom";
import { Header } from "../../components/Molekul";

const Homepage = () => {
  return (
    <div className="w-full h-screen flex flex-col overflow-auto">
      <div className="h-full w-full  overflow-auto">
        <Header />
        <div className="px-5 mt-[-5rem] text-center flex  flex-col justify-center content-center items-center h-full">
          <div className="backdrop-blur-sm bg-black/30 py-5 px-1 rounded-lg">
            <h1 className="font-bold text-3xl lg:text-6xl">
              Unlimited movies, TV shows, and more
            </h1>
            <p className="mt-4 lg:text-xl">Watch anywhere. Cancel anytime.</p>
            <h3 className="mt-6 mb-6 lg:text-xl">
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <a href="/movies">
              <Button placeholder="Get Started &#62;" style="text-lg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
