import { Quotes } from "./components/Quotes";
import { Quote } from "./components/Quote";
import { Button } from "./components/Button";
import { useUpdate } from "./hooks";
import "./styles/App.scss";

function App() {
  const { date, disabled, Update } = useUpdate();

  return (
    <>
      <div className="logo">
        <a href="/">Quo .</a>
      </div>

      <div className="quotes-container">
        <Quote updated={date} />
        <Quotes />
      </div>

      <Button onClick={Update} disabled={disabled} />
    </>
  );
}

export default App;
