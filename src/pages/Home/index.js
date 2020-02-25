import React from 'react'
import { FaPlus, FaGithub } from 'react-icons/fa'

import { Container, Divisor, Form, Title } from './styles'

const Home = () => (
  <Container>
    <Title>
      <FaGithub />
      <h1>Github Repos</h1>
    </Title>

    <Divisor />

    <Form>
      <input type="text" placeholder="Add new repo" />
      <button type="button">
        <FaPlus />
      </button>
    </Form>
  </Container>
)

export default Home
