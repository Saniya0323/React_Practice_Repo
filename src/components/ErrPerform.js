import React from 'react'

function ErrPerform({heroname}) {
if(heroname === 'Joker'){
throw new Error('not a hero')
}
return(
<div> {heroname} </div>
)
}

export default ErrPerform