import React, { useState, useEffect } from 'react'
import { useRouteMatch, Link } from 'react-router-dom'

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

      const { owner, description, name } = repository.data
      const { data } = issues

      setRepoData({
        avatar_url: owner.avatar_url,
        login: owner.login,
        description,
        name,
      })

      setIssues(data)
    }

    fetchRepositoryData()
  }, [match.params.repository])

  return (
    <Container>
      <Link to="/">Back</Link>
      <Title>
        <img src={repoData.avatar_url} alt="Logo" />
        <h2>
          {repoData.name}
          <small>{repoData.description}</small>
        </h2>
      </Title>
      {issues.length > 0 && (
        <List>
          {issues.map(issue => (
            <li key={issue.id}>
              <img src={issue.user.avatar_url} alt={issue.user.login} />
              <a href={issue.html_url}>
                <p>{issue.title}</p>
                {issue.labels.map(label => (
                  <strong key={label.id}>{label.name}</strong>
                ))}
              </a>
            </li>
          ))}
        </List>
      )}
    </Container>
  )
}

export default Repository
