import { useState } from "react"

function App() {
  const [novoHabito, setNovoHabito] = useState("")
  const [habitos, setHabitos] = useState<string[]>([])

  function adicionarHabito() {
    setHabitos([...habitos, novoHabito])
    setNovoHabito("")
  }

  return (
    <main>
      <section>
        <h1>Habitly</h1>
        <p>Crie hábitos e acompanhe seu progresso.</p>

        <input
          placeholder="Digite seu hábito"
          value={novoHabito}
          onChange={(event) => setNovoHabito(event.target.value)}
        />

        <button onClick={adicionarHabito}>
          Adicionar
        </button>
      </section>

      <section>
        <h2>Meus hábitos</h2>

        {habitos.map((habito) => (
          <p key={habito}>{habito}</p>
        ))}
      </section>
    </main>
  )
}

export default App