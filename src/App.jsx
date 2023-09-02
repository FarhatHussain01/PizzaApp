import React from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="max-w-[80%] w-[800px] min-h-screen m-auto flex items-center flex-col ">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
};

export default App;
