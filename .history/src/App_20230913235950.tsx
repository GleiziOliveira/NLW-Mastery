import { FileVideo, Github, Upload, Wand2 } from "lucide-react"
import { Button } from "./components/ui/button"
import { Separator } from "./components/ui/separator"
import { VideoInputForm } from "./components/video-input-form.tsx"
import { Textarea } from "./components/ui/textarea"
import { Label } from "./components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./components/ui/select"
import { Slider } from "./components/ui/slider"

export function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="px-6 py-3 flex items-center justify-between border-b">
        {/*px p= padding e x = eixo horizontal e o número vale lembrar que sempre é x4 ou seja o 6 é = a 24px py = padding vertical sendo 12px  */}
        <h1 className="text-xl font-bold">upload.ia</h1>
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">
            Desenvolvido com ❤ na NLW da Rocketseat
          </span>

          <Separator orientation="vertical" className="h-6" />

          <Button variant="outline">
            <Github className="w-4 h-4 mr-2" />{" "}
            {/* w=widht e h= height (altura e largura) */}
            Github
          </Button>
        </div>
      </div>

      <main className="flex-1 p-6 flex gap-6">
        <div className="flex flex-col flex-1 gap-4">
          <div className="grid grid-rows-2 gap-4 flex-1">
            <Textarea
              className="resize-none p-4 leading-relaxed"
              placeholder="Inclua o prompt para a IA..."
            />

            <Textarea
              className="resize-none p-4 leading-relaxed"
              placeholder="Resultado gerado pela IA..."
              readOnly
            />
          </div>

          <p className="text-sm text-muted-foreground">
            Lembre-se: Você pode utilizar a variável
            <code className="text-pink-400"> {"{transcription}"} </code> no seu
            prompt para adicionar o conteúdo do vídeo selecionado.
          </p>
        </div>

        <aside className="w-80 space-y-6">
          {" "}
          {/* space-y-6 vai colocar um espaçamento de 24px entre cada tag e tem que estar com display block para funcionar */}
          <VideoInputForm/>

          <Separator />
          <form className="space-y-6">
            <div className="space-y-2">
              <Label>Prompt</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione um Prompt..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="title">Título do Youtube</SelectItem>
                  <SelectItem value="description">
                    Descrição do Youtube
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Modelo de Prompt</Label>

              <Select disabled defaultValue="gpt3.5">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gpt3.5">GPT 3.5-Turbo 16k</SelectItem>
                </SelectContent>
              </Select>
              <span className=" block text-sm text-muted-foreground italic">
                Você Poderá customizar essa opção em breve
              </span>
            </div>

            <Separator />

            <div className="space-y-2">
              <Label>Temperatura</Label>

              <Slider min={0} max={1} step={0.1} />

              <span className=" block text-sm text-muted-foreground italic leading-relaxed">
                Valores mais altos tendem a deixar o resultado mais criativo,
                porém a tendência é que de tenha mais erros.
              </span>
            </div>

            <Separator />

            <Button type="submit" className="w-full">
              Executar
              <Wand2 className="w-4 h-4 ml-2" />
            </Button>
          </form>
        </aside>
      </main>
    </div>
  )
}
