import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

export const HomeComponent = () => {
  const {theme} = useContext(ThemeContext)
  console.log("theme in home",theme)
  return (
    <div style={{textAlign:"center"}}>
        <h1>HOME COMPONENT.....</h1>
    </div>
  )
}