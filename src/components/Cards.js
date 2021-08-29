import { Card } from "./Card";

function Cards(props) {
  const { data = [] } = props;

  return (
    <div className="cards">
      {data.length
        ? data.map((film) => {
            return <Card key={film.imdbID} {...film} />;
          })
        : "Nothing Found"}
    </div>
  );
}

export { Cards };
