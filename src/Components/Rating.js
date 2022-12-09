import React from 'react'
import Star from "../assets/Star";


export default function Rating(props) {
const rate = props.rating;
const notes = [1, 2, 3, 4, 5]

  return (
  <>
      {notes.map((note) =>
      rate >= note ? (
        <Star
        key={note.toString()}
        fill="#FF6060" />
      ) : (
        <Star
        key={note.toString()}
        fill="#E3E3E3"/>
      ))}
    </>
  )
}
