import './App.css'

function App() {
  const name = 'leonardo'
  const newName = name.toUpperCase()

  function sum(a, b) {
    return a + b
  }

  return (
    <div className="App">
      <h1>Olá React!</h1>
      <p>Meu primeiro App!</p>
      <p>Olá, {newName}</p>
      <p>soma: {sum(1, 2)}</p>
    </div>
  )
}

export default App
