

import AnimatedCursor from "react-animated-cursor"
import Spline from '@splinetool/react-spline';
import './App.css'

function App() {

  return (
    <div className="App">
      <AnimatedCursor color='40, 40, 40' />
      <div className="iphone">
      <Spline className="iphone" scene="https://prod.spline.design/86Ul8puS8UlQpGrp/scene.splinecode" />
      </div>
      <div className='iphoneText'>
          <h1 className='text'>Iphone</h1>
        </div>
        <div className='proText'>
          <h1>14 Pro</h1>
        </div>
    </div>

  )
}

export default App
