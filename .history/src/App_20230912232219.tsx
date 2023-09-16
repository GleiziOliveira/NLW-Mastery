import { Button } from "./components/ui/button";


export function App() {
  

  return (
    <div>
      <div className="px-6"> {/* p= padding x quer dizer eixo horizontal e o número vale lembrar que sempre é x4 ou seja o 6 é = a 24  */}
        <h1>upload.ia</h1>
        <div>
          <span>Desenvolvido com ❤ na NLW da Rocketseat</span>
          <Button>Github</Button>
        </div>
      </div>
    </div>
  )
}

