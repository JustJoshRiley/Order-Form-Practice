import './App.css';
import {useState} from 'react'

function App() {
  const [name, setName] = useState('')
  const [peperoni, setPeperoni] = useState(false)
  const [sausage, setSausage] = useState(false)
  const [peppers, setPeppers] = useState(false)
  const [onions, setOnions] = useState(false)


  return (
    <div className="App">
      <form>
        <h1>Pizza Order</h1>
        <input
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
        />
        <label>
          <input
          type="checkbox"
          checked={peperoni}
          onChange={() => setPeperoni(!peperoni)}
          />
          Peperoni
        </label>
        <label>
          <input
          type="checkbox"
          checked={sausage}
          onChange={() => setSausage(!sausage)}
          />
          Sausage
        </label>
        <label>
          <input
          type="checkbox"
          checked={peppers}
          onChange={() => setPeppers(!peppers)}
          />
          Peppers
        </label>
        <label>
          <input
          type="checkbox"
          checked={onions}
          onChange={() => setOnions(!onions)}
          />
          Onions
        </label>
        <button type='submit'>
          Submit
        </button>
      </form>
      <div>
        <h1>Your Order</h1>
        {name && <h1>{name}</h1>}
        {peperoni && <h2>Peperoni</h2>}
        {sausage && <h2>Sausage</h2>}
        {peppers && <h2>Peppers</h2>}
        {onions && <h2>Onions</h2>}
      </div>
    </div>
  );
}

export default App;
