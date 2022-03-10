import type { NextPage } from "next";
import { Hero, HomeNavbar } from "~/components/home";

const Home: NextPage = () => {
  return (
    <div>
      <HomeNavbar />
      <Hero />
    </div>
  );
};

export default Home;
