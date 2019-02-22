import React from 'react'

export const WeirdLooper = (text, nrOfLoops) => { 
  const happyRange = [ '😍', '😂', '😃', '😀', '🙂', '🤔', '😐', '🙁', '😟', '🥺', '😣', '😖', '😭']
  function getSpanStart(text, index) {
    const emoji = happyRange[index]
    const style = `
      display: inline-block; 
      position: relative; 
      transform: translateX(${index * 10}px) translateX(${index * 10}px) rotate(${index * 4}deg); 
      opacity: ${0.95 - index / nrOfLoops};
      filter: hue-rotate(${0.95 - index / nrOfLoops});
    `

    return `<span style="${style}">${text}${emoji}</span>`
  }

  
  return <span style={{position: 'relative'}} dangerouslySetInnerHTML={{__html: `
    ${Array(nrOfLoops).fill(text).map(getSpanStart).join('')}
  `
  }}/>
}