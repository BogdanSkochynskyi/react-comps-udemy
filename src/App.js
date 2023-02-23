import Accordion from "./components/Accordion";


function App() {

  const items = [
    {
      label:'ba fhadjkf afakjhf ',
      content: 'dkjalj alcjdalkcjaldkjc lakjc;ak a; dvj;a vjdla'
    },
    {
      label:'ba fhadjkf ',
      content: 'dkjalj alcjdalkcjaldkjc lakjc;ak a; dvj;a vjdla'
    },
    {
      label:' afakjhf ',
      content: 'dkjalj alcjdalkcjaldkjc lakjc;ak a; dvj;a vjdla'
    }
  ];

  return (
   <Accordion items = {items}/>
  );
}

export default App;
