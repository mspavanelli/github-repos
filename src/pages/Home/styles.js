import styled from 'styled-components'

export const Container = styled.div`
  background-color: white;
  border: 1px solid #ccc;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  color: #222;
  height: auto;
  margin: 30px auto;
  max-width: 600px;
  padding: 20px 25px 30px;
  width: 90%;
`

export const Title = styled.header`
  align-items: center;
  display: flex;

  svg {
    margin-right: 10px;
    font-size: 1.5rem;
  }

  h1 {
    font-size: 1.7rem;
    font-weight: 300;
  }
`

export const Divisor = styled.hr`
  border: 0;
  border-top: 1px solid #ddd;
  margin: 20px auto;
`

export const Form = styled.form`
  display: flex;

  input {
    color: #222;
    flex: 1;
    padding: 10px 15px;
  }

  button {
    align-items: center;
    display: flex;
    justify-content: center;
    margin-left: 10px;
    width: 40px;
    color: #333;
  }

  button,
  input {
    font-size: 1rem;
    border-radius: 4px;
    border: 1px solid #999;

    &:focus {
      border-color: #333;
    }
  }
`

export const List = styled.ul`
  list-style: none;
  margin-top: 30px;

  li {
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #cdcdcd;
    padding-top: 15px;

    & + li {
      margin-top: 15px;
    }
  }
`
