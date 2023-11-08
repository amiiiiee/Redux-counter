import React from "react";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navi=useNavigate()
  return (
    <div>
      <Container >
        <h1>Heloooooooo</h1>
        <br />
        <hr />
        <p>
          aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        </p>
        <br />
        <hr />
        <br />
        <hr />
        <Button onClick={()=>navi('/count')}>click here </Button>
      </Container>
    </div>
  );
};

export default Home;
