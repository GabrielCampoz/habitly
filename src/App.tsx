import { useState } from "react"
import { Header } from "./componentes/Header"

interface Habit {
  id: string;
  habito: string;
  status: boolean;
}


function App() {
  const [novoHabito, setNovoHabito] = useState("")
  const [habitos, setHabitos] = useState<Habit[]>([])

  function adicionarHabito() {
    if (novoHabito.trim() === "") return;
    const novoObjeto: Habit = {
      id: crypto.randomUUID(),
      habito: novoHabito,
      status: false
    }

    setHabitos([...habitos, novoObjeto])
    setNovoHabito("")
  }

  function alternarHabito(idDesejado: string) {
    const novaLista = habitos.map((item) => {
      if (item.id === idDesejado) {
        return { ...item, status: !item.status }
      }
      return item;
    })

    setHabitos(novaLista)
  }

  function deletarHabito(idDesejado: string) {
    const novaLista = habitos.filter((item) => {
      return item.id !== idDesejado;
    })

    setHabitos(novaLista)
  }

  return (
    <main className="min-h-screen bg-zinc-100 flex items-center justify-center p-4">
      <section className="bg-white p-8 rounded-2xl shadow-sm w-full max-w-md flex flex-col gap-6">

        <Header />

        <div className="flex gap-2">
          <input
            className="flex-1 border border-zinc-300 rounded-lg px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all"
            placeholder="Digite seu hábito..."
            value={novoHabito}
            onChange={(event) => setNovoHabito(event.target.value)}
          />

          <button
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
            onClick={adicionarHabito}
          >
            Adicionar
          </button>
        </div>

        <div className="flex flex-col gap-3 mt-4">
          {habitos.map((item) => (
            <div
              key={item.id}
              className="bg-zinc-50 border border-zinc-200 p-4 rounded-lg flex items-center gap-3"
            >
              <button
                onClick={() => alternarHabito(item.id)}
                className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-colors
                  ${item.status ? 'bg-green-500 border-green-500' : 'border-zinc-400 bg-white'}`
                }
              >
                {item.status && <span className="text-white text-sm font-bold">✓</span>}
              </button>
              <span className={`font-medium transition-colors ${item.status ? 'text-zinc-400 line-through' : 'text-zinc-700'}`}>
                {item.habito}
              </span>
              <button 
                onClick={() => deletarHabito(item.id)}
                className="text-zinc-400 hover:text-red-500 transition-colors p-2"
                title="Deletar hábito"
              >
                🗑️
              </button>
                

            </div>
          ))}
        </div>

      </section>
    </main>
  )
}

export default App