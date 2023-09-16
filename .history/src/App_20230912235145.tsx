import { Github } from 'lucide-react'
import { Button } from "./components/ui/button";
import { Separator } from './components/ui/separator';


export function App() {
  

  return (
    <div className="min-h-screen flex flex-col">
      <div className="px-6 py-3 flex items-center justify-between border-b"> {/*px p= padding e x = eixo horizontal e o número vale lembrar que sempre é x4 ou seja o 6 é = a 24px py = padding vertical sendo 12px  */}
        <h1 className="text-xl font-bold">upload.ia</h1>
        <div className="flex items-center gap-3" >
          <span className="text-sm text-muted-foreground">Desenvolvido com ❤ na NLW da Rocketseat</span>
            
          <Separator orientation='vertical' className="h-6" />    

          <Button variant="outline"> 
            <Github className="w-4 h-4 mr-2"/> {/* w=widht e h= height (altura e largura) */}
            Github
          </Button>
        </div>
      </div>

      <main className="flex-1 p-6 flex gap-6">
        <div className="flex flex-col flex-1"></div>
        <aside></aside>
      </main>

    </div>
  )
}

