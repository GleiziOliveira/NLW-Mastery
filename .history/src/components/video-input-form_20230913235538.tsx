
import { FileVideo } from "lucide-react"
import { Button } from "./components/ui/button"
import { Separator } from "./ui/separator"
import { Textarea } from "./ui/textarea"
import { Label } from "./ui/label"


export function VideoInputForm(){
  return (
    <form className="space-y-6">
  <label
    htmlFor="video"
    className="border flex rounded-md aspect-video cursor-pointer border-dashed text-sm flex-col gap-2 items-center justify-center text-muted-foreground hover:bg-primary"
  >
    <FileVideo className="w-4 h-4" />
    Selecione um Video
  </label>

  <input type="file" id="video" accept="video/mp4" className="sr-only" />
  {/* o sr-only remove visualmente o input por=ém ele continua na DOM*/}

  <Separator />

  <div className="space-y-2">
    <Label htmlFor="transcription_prompt">Prompt de Transcrição </Label>
    <Textarea
      id="transcription_prompt"
      className="h-20 leading-relaxed resize-none"
      placeholder="Inclua palavras-chaves mencionadas no vídeo separadas por vírgula (,)"
    />
  </div>

  <Button type="submit" className="w-full">
    Carregar Video
    <Upload className="w-4 h-4 ml-2" />
  </Button>
</form>
  )
}
