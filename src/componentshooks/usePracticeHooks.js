import {useEffect} from 'react'

function usePracticeHooks(count) {    
  useEffect(()=>{
    document.title = `${count}`
  })
}
export default usePracticeHooks