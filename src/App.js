import Accordion from "./components/Accordion";


function App() {

  const items = [
    {
      id: 1,
      label:'Section 1',
      content: 'Text for section 1.'
    },
    {
      id: 2,
      label:'Section 2',
      content: 'Text for section 2. Can be different'
    },
    {
      id: 3,
      label:'Section 3',
      content: 'Freeeeeessssstaila raka maka fon!'
    }
  ];

  return (
   <Accordion items = {items}/>
  );
}

export default App;
