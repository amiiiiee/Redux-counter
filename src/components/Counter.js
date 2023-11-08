import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../redux/counterSlice';
import { Button, Container } from 'react-bootstrap';

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);

  return (
    <div >
      <Container style={{border:"2px solid", height:'200px' ,padding:'20px',marginTop:'200px'}}>

      <h1>Counter App</h1><hr />
      <h3><b>Count:</b> {count}</h3>
      <Button className='m-2' onClick={() => dispatch(increment())}>Increment</Button>
      <Button onClick={() => dispatch(decrement())}>Decrement</Button>
      </Container>
    </div>
  );
};

export default Counter;