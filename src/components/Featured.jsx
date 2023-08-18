import Card from "./Card/Card";

const Featured = () => {
  return (
    <section className="featured padding-x">
      <div className="buttons">
        <button className="active">Çaylar</button>
        <button>Qəhvələr</button>
        <button>Ballar</button>
        <button>Teaware</button>
      </div>
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
