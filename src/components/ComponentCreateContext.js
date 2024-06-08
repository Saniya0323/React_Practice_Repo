import React, { startTransition } from 'react'

 const UserContext = React.createContext('Hiiii')

    const UserProvider = UserContext.Provider
   const  UserConsumer = UserContext.Consumer
 
export {UserProvider , UserConsumer}
export default UserContext