import SearchInput from "@/components/state-lifting/SearchInput";
import UsersList from "@/components/state-lifting/UsersList";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div>
        <h2 className="text-green-700 text-3xl">Home page</h2>
        <>
          <SearchInput search={search} setSearch={setSearch} />

          <UsersList search={search} />
        </>
      </div>
    </>
  );
};

export default Home;
