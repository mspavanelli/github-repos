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
  flex-direction: column;

  img {
    height: auto;
    width: 150px;
  }

  h2 {
    align-items: center;
    display: flex;
    font-size: 1.7rem;
    font-weight: 300;
    flex-direction: column;
    margin-top: 20px;
    text-align: center;

    small {
      color: #555;
      font-size: 0.7em;
      margin-top: 10px;
    }
  }
`

export const Divisor = styled.hr`
  border: 0;
  border-top: 1px solid #ddd;
  margin: 20px auto;
`

export const List = styled.ul`
  list-style: none;
  margin-top: 30px;

  li {
    border-top: 1px solid #cdcdcd;
    display: flex;
    font-size: 1rem;
    justify-content: space-between;
    padding-top: 15px;
    text-align: left;

    a {
      color: #222;
      flex: 1;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }

      p {
        display: block;
        text-align: left;
      }

      strong {
        background: #e9e9e9;
        border: 1px solid #ddd;
        border-radius: 5px;
        display: inline-block;
        margin-top: 5px;
        margin-right: 5px;
        padding: 1px 6px;
      }
    }

    img {
      border: 2px solid #eee;
      border-radius: 50%;
      height: 50px;
      margin-right: 15px;
      width: 50px;
    }

    & + li {
      margin-top: 15px;
    }
  }
`
