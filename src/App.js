import "./App.css";
import Card from "./components/Card";
import data from "./helpers/data";

const App = () => {
  return (
    <>
      <small class="typing-demo">
        Coded by mgCuriousCoders Team {new Date().getFullYear()}©
      </small>
      <h1>Image Gallery</h1>
      <div className="App">
        {data.map((item) => {
          return <Card data={item} />;
        })}
      </div>
    </>
  );
};

export default App;
