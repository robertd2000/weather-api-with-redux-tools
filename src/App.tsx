import './App.css'
import { Cities } from './components/Cities'

const App = (props: any) => {
  return (
    <>
      <div className="container">
        <a href="#" className="mainPageLink">
          <h4>WEATHER APP</h4>
        </a>

        <Cities />
      </div>
    </>
  )
}

export default App
