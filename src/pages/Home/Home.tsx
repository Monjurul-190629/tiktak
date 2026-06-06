import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div>
        <h2 className="text-green-700 text-3xl">Home page</h2>
      </div>
    </>
  );
};

export default Home;
