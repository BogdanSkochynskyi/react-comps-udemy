import Button from "./Button";
import { GoBell, GoDatabase } from 'react-icons/go';

function App() {
  return (
    <div>
      <div>
        <Button primary rounded><GoBell/>Button</Button>
      </div>
      <div>
        <Button secondary outline><GoDatabase/>Button</Button>
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
