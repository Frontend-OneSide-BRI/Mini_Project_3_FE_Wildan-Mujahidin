import { Button } from "../../components/Atom";
import { Header } from "../../components/Molekul";

const Homepage = () => {
  return (
    <div className="w-full h-screen flex flex-col overflow-auto">
      <div className="h-full w-full  overflow-auto">
        <Header />
        <div className="px-5 pt-5 pb-3 text-center">
          <h1 className="font-bold text-3xl">
            Unlimited movies, TV shows, and more
          </h1>
          <p className="mt-4">Watch anywhere. Cancel anytime.</p>
          <h3 className="mt-6 mb-6">
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>
          <Button placeholder="Get Started &#62;" style="text-lg" />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
