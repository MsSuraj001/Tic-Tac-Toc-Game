
import './App.css'
import Card from './Components/Cards/Card'
import Grid from './Components/Grid/Grid'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    {/* <h1>this is the main tic tac toc</h1> */}
    {/* <Card player="X"/> */}
    <Grid NumberOfCards={9} />
    </>
  )
}

export default App
