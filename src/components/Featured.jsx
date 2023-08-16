import Card from "./Card/Card";

const Featured = () => {
  return (
    <section className="featured padding-x">
      <div className="buttons">
        <button className="active">Yeni Gələnlər</button>
        <button className="">Ən Çox Satılanlar</button>
        <button className="">Premium</button>
      </div>{" "}
      <div className="cards">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};

export default Featured;
