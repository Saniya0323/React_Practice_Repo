import React, { useContext } from 'react'
import { UserContent, UserCity, UserCountry } from '../App'

function ComponentF() {
  
  const user = useContext(UserContent)
  const city = useContext(UserCity)
  const country = useContext(UserCountry)
  return (
    <div>
      {/* codes gets complex as increased  */}
      
      {/* <UserContent.Consumer>
      {
        user => {
          return <div>{user}</div>
        }
      }
      </UserContent.Consumer> */}

      {user} {city} {country}
      
    </div>
  )
}

export default ComponentF