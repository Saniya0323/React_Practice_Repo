import React, { useContext } from 'react';
import './App.css';

// import UseState from './componentshooks/UseState';
// import UseStateObject from './componentshooks/UseStateObject';
// import UseStateArray from './componentshooks/UseStateArray';
// import UseEffect from './componentshooks/UseEffect';
// import UseEffectOnce from './componentshooks/UseEffectOnce';
// import UseEffectCounter from './componentshooks/UseEffectCounter';
// import UseEffectCleanup from './componentshooks/UseEffectCleanup';
// import CounterClass from './componentshooks/CounterClass';
// import ComponentC from './componentshooks/ComponentC';
// export const UserContent = React.createContext()
// export const UserCity = React.createContext()
// export const UserCountry = React.createContext()
import UseReducerBasic from './componentshooks/UseReducerBasic';
import PracticeHooks from './componentshooks/PracticeHooks';
import UseReducersComplex from './componentshooks/UseReducersComplex';

function App() {
  return (
    <div className="App">
     {/* <UseState />
     <UseStateObject />
     <UseStateArray />
     <UseEffect />
     <UseEffectOnce />
     <UseEffectCounter />
     <UseEffectCleanup /> */}
     {/* <CounterClass /> */}

     {/* <UserContent.Provider value='saniya'>
      <UserCity.Provider value = 'kolhapur'>
        <UserCountry.Provider value='india'>
        <ComponentC />
        </UserCountry.Provider>
      </UserCity.Provider>
     </UserContent.Provider> */}

     {/* <UseReducerBasic /> */}

{/* <PracticeProgramsClass /> */}
     {/* <PracticeHooks />
     <UseReducerBasic /> */}
     <UseReducersComplex />
 </div>
  );
}

export default App;
