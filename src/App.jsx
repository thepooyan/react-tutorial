import { Fragment } from "react";
import Amin from "./Amin"
import Card from "./Card"
import Container from "./Container";

function App(props) {

  const data = [
    {title: 'title one', descrip: 'des one', date: 'date one'},
    {title: 'title two', descrip: 'des two', date: 'date two'},
    {title: 'title three', descrip: 'des three', date: 'date three'},
    {title: 'title four', descrip: 'des four', date: 'date four'},
  ];

  const pooyan = function() {};
  const sla = () => {};


  return (
    <Fragment>

      <Amin weight={10}/>

      {data.map(item => {
          return <Card title={item.title} description={item.descrip} date={item.date}/>
        })
      }

      <Container>
        <p>this is paragraph</p>
      </Container>

      {/* <Button onclick={() => {alert('sdf')}}>click</Button> */}

    </Fragment>
  )
}

export default App
