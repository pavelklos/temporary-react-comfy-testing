import React from 'react';
import styled from 'styled-components';

const Testing = () => {
  return (
    <Wrapper>
      <h3>hello world</h3>
      <p>hello people</p>
      <div className='article'>
        <p>this is paragraph in article</p>
      </div>
      <button>click me</button>
      <hr />
      <Button className='test'>click me</Button>
      <Container>
        <div>
          <h3>hello world</h3>
        </div>
        <div className='hero'>hero text</div>
      </Container>
      <Container2>
        <div>
          <h3>hello world</h3>
        </div>
        <div className='hero'>hero text</div>
      </Container2>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  border: 2px solid crimson;
  h3 {
    color: crimson;
  }
  .article {
    border: 2px solid violet;
    p {
      color: violet;
      font-size: 2rem;
    }
  }
`;
const Button = styled.button`
  background: lavenderblush;
  color: crimson;
  border: 2px solid crimson;
`;
const Container = styled.div`
  background: honeydew;
  color: green;
  border: 2px solid green;
  font-size: 2rem;
  .hero {
    font-size: 8rem;
  }
`;
const Container2 = styled.div`
  background: honeydew;
  color: green;
  border: 2px solid green;
  font-size: 2rem;
  .hero {
    font-size: 4rem;
  }
`;

export default Testing;
