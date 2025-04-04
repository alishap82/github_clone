import React from 'react'
import { Card } from 'react-bootstrap'

const MainContent = () => {
  return (
    <div className="p-4">
    <h3>Home</h3>
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>krahets starred a repository</Card.Title>
        <Card.Text>
          <strong>getcursor/cursor</strong> - The AI Code Editor
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>krahets starred a repository</Card.Title>
        <Card.Text>
          <strong>felix/brush_avatar</strong> - Browser viewer for GaussianAvatars
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
  )
}

export default MainContent