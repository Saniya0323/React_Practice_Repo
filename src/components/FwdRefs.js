import React from 'react'

// function FwdRefs() {
//   return (
//     <div>
//         <input type='text' />
//     </div>
//   )
// }

const FwdRefs = React.forwardRef((props,ref)=>{
    return (
            <div>
                <input type='text' ref={ref} />
            </div>
          )
})

export default FwdRefs