import { Github } from 'lucide-react'
import { Button } from "./components/ui/button";


export function App() {
  

  return (
    <div>
      <div className="px-6 py-3 flex items-center justify-between border-b"> {/*px p= padding e x = eixo horizontal e o número vale lembrar que sempre é x4 ou seja o 6 é = a 24px py = padding vertical sendo 12px  */}
        <h1 className="text-xl font-bold">upload.ia</h1>
        <div className="flex items-center gap-3" >
          <span className="text-sm text-muted-foreground">Desenvolvido com ❤ na NLW da Rocketseat</span>
          <Button variant="outline"> 
            <Github/>
            Github
          </Button>
        </div>
      </div>
    </div>
  )
}

