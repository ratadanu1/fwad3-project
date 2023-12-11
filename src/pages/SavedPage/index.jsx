import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SavedTaskList from "../../components/SavedTaskList";

const SavedPage = () => {
  return (
    <div>
      <Header />
        <SavedTaskList />
      <Footer />
    </div>
  );
};

export default SavedPage;
