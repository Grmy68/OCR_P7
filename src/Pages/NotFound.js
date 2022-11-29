import React from 'react'
import "./NotFound.css";

export default function NotFound() {
  return (
    <div className='notFound'>
        <h1>404</h1>
        <p>Oups ! La page que vous demandez n'existe pas.</p>
        <a href="/">Retourner sur la page d’accueil</a>
    </div>
  )
}
