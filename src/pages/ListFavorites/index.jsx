import { Header } from "../../components/Molekul";

const ListFavorites = () => {
  return (
    <div className="w-full h-screen flex flex-col overflow-auto">
      <div className="h-full w-full  overflow-auto">
        <Header />
        <div className="w-full text-center text-3xl mt-5">
          <p>My Favorites</p>
        </div>
      </div>
    </div>
  );
};

export default ListFavorites;
