import Button from "./Button";

function App() {
  return (
    <div>
      <div>
        <Button primary rounded>Button</Button>
      </div>
      <div>
        <Button secondary outline>Button</Button>
      </div>
      <div>
        <Button warning outline>Button</Button>
      </div>
      <div>
        <Button success outline>Button</Button>
      </div>
      <div>
        <Button danger outline>Button</Button>
      </div>
      
    </div>
  );
}

export default App;
