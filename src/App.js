import Accordion from "./components/Accordion/Accordion";
import LoadMoreButton from "./components/LoadMoreButton/LoadMoreButton";
import RandomColorGenerator from "./components/RandomColorGenerator/RandomColorGenerator";
import StarReview from "./components/StarReview/StarReview";

function App() {
  return (
    <div className="App">
      <LoadMoreButton url={"https://dummyjson.com/products?limit=100"} />
    </div>
  );
}

export default App;
