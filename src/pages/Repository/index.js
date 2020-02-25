import React, { useState, useEffect } from 'react'
import { useRouteMatch } from 'react-router-dom'

import api from '../../services/api'

import { Container, Title, List } from './styles'

const Repository = () => {
  const match = useRouteMatch()

  const [repoData, setRepoData] = useState({})
  const [issues, setIssues] = useState([])

  useEffect(() => {
    const fetchRepositoryData = async () => {
      const repoName = decodeURIComponent(match.params.repository)

      const [repository, issues] = await Promise.all([
        api.get(`/repos/${repoName}`),
        api.get(`/repos/${repoName}/issues`, { params: { per_page: 5 } }),
      ])

      const { owner, description } = repository.data
      const { data } = issues

      setRepoData({
        avatar_url: owner.avatar_url,
        login: owner.login,
        description,
      })

      setIssues(data)
    }

    fetchRepositoryData()
  }, [])

  return (
    <Container>
      <Title>Repository {decodeURIComponent(match.params.repository)}</Title>
      {issues.length > 0 && (
        <List>
          {issues.map(issue => (
            <li key={issue.id}>{issue.title}</li>
          ))}
        </List>
      )}
    </Container>
  )
}

export default Repository
