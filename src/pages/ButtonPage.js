import Button from "../components/Button";
import { GoBell, GoDatabase } from 'react-icons/go';

function ButtonPage() {
  return (
    <div>
      <div>
        <Button primary rounded className="mb-5" onClick={() => {console.log('Click!!!')}}><GoBell/>Button</Button>
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

export default ButtonPage;
