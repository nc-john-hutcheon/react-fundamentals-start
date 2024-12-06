import "./App.css";

function App() {
  const tvList = ["Succession", "Limmy's Show", "Inside No.9"];

  return (
    <section className="App">
      <header>
        <h1>AmaJohn Prime</h1>
        <h2>My watchlist</h2>
      </header>
      <section>
        <ul>
          {tvList.map((tvShow) => {
            return <li key={tvShow}>{tvShow}</li>;
          })}
        </ul>
      </section>
      <footer>
        <form>
          <input placeholder="Next show to watch..." type="text" id="tvshow" />
          <input type="submit" value="Add to list" />
        </form>
      </footer>
    </section>
  );
}

export default App;
