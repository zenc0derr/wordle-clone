import React from 'react'

const Word = ({letters}) => {
  return (
    <div className='flex-container'>
      <p className='letter'>{letters[0]|| ' '}</p>
      <p className='letter'>{letters[1]|| ' '}</p>
      <p className='letter'>{letters[2]|| ' '}</p>
      <p className='letter'>{letters[3]|| ' '}</p>
      <p className='letter'>{letters[4]|| ' '}</p>
    </div>
  )
}

export default Word
