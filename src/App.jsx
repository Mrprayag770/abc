import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { TableOne } from './TableOne';
import Calculator from './Calculator';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <TableOne /> */}
      <Calculator/>
    </>
  )
}

export default App
