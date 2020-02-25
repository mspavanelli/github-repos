import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaPlus, FaGithub } from 'react-icons/fa'

import api from '../../services/api'

import { Container, Divisor, Form, List, Title } from './styles'

const Home = () => {
  const [newRepositoryName, setNewRepositoryName] = useState('')
  const [repoList, setRepoList] = useState([])

  useEffect(() => {
    setRepoList(JSON.parse(localStorage.getItem('github_repos')) || [])
  }, [])

  useEffect(() => {
    localStorage.setItem('github_repos', JSON.stringify(repoList))
  }, [repoList])

  const handleInputChange = event => {
    setNewRepositoryName(event.target.value)
  }

  const handleAddNewRepo = async event => {
    event.preventDefault()

    const { data } = await api.get(`/repos/${newRepositoryName}`)
    const { id, full_name } = data

    const newRepo = { id, name: full_name }

    setRepoList([...repoList, newRepo])
    setNewRepositoryName('')
  }

  return (
    <Container>
      <Title>
        <FaGithub />
        <h1>Github Repos</h1>
      </Title>

      <Divisor />

      <Form onSubmit={e => handleAddNewRepo(e)}>
        <input
          type="text"
          placeholder="Add new repo"
          onChange={e => handleInputChange(e)}
          value={newRepositoryName}
        />
        <button type="button" onClick={e => handleAddNewRepo(e)}>
          <FaPlus />
        </button>
      </Form>

      {repoList.length > 0 && (
        <List>
          {repoList.map(repo => (
            <li key={repo.id}>
              {repo.name}
              <Link to={`/repository/${encodeURIComponent(repo.name)}`}>
                details
              </Link>
            </li>
          ))}
        </List>
      )}
    </Container>
  )
}

export default Home
