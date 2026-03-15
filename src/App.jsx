import React, { Suspense } from 'react'
import Countries from './Components/Countries/Countries';

const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
.then(res => res.json());

const App = () => {
  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
      <Countries countriesPromise={countriesPromise}/>
      </Suspense>
      <h1></h1>
    </div>
  )
}

export default App;