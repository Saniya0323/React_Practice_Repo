import React from 'react'

function MemoDemo({name}) {
  return (
    <div>MemoDemo
        {name}
    </div>
  )
}

export default React.memo(MemoDemo)