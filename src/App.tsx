import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import AppLayout from './views/Layout';
import { Col, Row } from 'antd';
import { useMemo } from 'react';
import { useDimensions } from './utils/hooks/useDimensions';

function App() {
  const [count, setCount] = useState(0)

  const { localDimensions } = useDimensions();

  console.log(localDimensions.width)
  return (
    <div className="App" style={{width: localDimensions.width, height: localDimensions.height}}>
      <Row>
        <Col span={24}>
        <AppLayout localDimensions={localDimensions} />

        </Col>
      </Row>
      <h1>Heading1</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </div>
  )
}

export default App
