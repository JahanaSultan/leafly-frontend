import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import Card from "../Card/Card";
import ExploreMore from "../Card/ExploreMore";
const GiftBox = () => {
  return (
    <>
      <SectionHeading text="Hədiyyə Qutuları" />
      <section className="giftbox padding-x">
        <div className="cards">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <ExploreMore/>
        </div>
      </section>
    </>
  );
};

export default GiftBox;
