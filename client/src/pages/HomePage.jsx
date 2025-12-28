import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    document.title = "Chatty";
  }, []);

  return <div>HomePage</div>;
};

export default HomePage;
