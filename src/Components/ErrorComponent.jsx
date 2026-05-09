import React from 'react'

export const ErrorComponent = ({ error }) => {
  return (
    <div style={{ textAlign: 'center', color: 'red', marginTop: '20px' }}>
      <h1>Error</h1>
      <p>{error || "Something went wrong!"}</p>
    </div>
  )
}

