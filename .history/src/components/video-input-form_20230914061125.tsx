import { FileVideo, Upload } from "lucide-react"
import { Separator } from "./ui/separator"
import { Label } from "./ui/label"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"
import { ChangeEvent, FormEvent, useMemo, useRef, useState } from "react"
import { getFFmpeg } from "@/lib/ffmpeg"
import { fetchFile } from "@ffmpeg/util"


export function VideoInputForm() {
  const [videoFile, setVideoFile] = useState<File | null>(null)
  const promptInputRef = useRef<HTMLTextAreaElement>(null)

  function handleFileSelected(event: ChangeEvent<HTMLInputElement>) {
    const { files } = event.currentTarget

    if (!files) {
      return
    }

    const selectedFile = files[0]

    setVideoFile(selectedFile)
  }

  async function convertVideoToAudio(video: File) {
    console.log("Convert started.")

    const ffmpeg = await getFFmpeg()

    await ffmpeg.writeFile("input.mp4", await fetchFile(video))
   
    //writeFile é usado para colocar um arquivo dentro do contexto do ffmpeg 

    ffmpeg.on("progress", (progress) => {
      console.log("Convert progress: " + Math.round(progress.progress * 100))
    })

    await ffmpeg.exec([
      "-i",
      "input.mp4",
      "-map",
      "0:a",
      "-b:a",
      "20k",
      "-acodec",
      "libmp3lame",
      "output.mp3",
    ])

    const data = await ffmpeg.readFile("output.mp3")

    const audioFileBlob = new Blob([data], { type: "audio/mp3" })
    const audioFile = new File([audioFileBlob], "output.mp3", {
      type: "audio/mpeg",
    })

    console.log("Convert finished.")

    return audioFile
  }

  async function handleUploadVideo(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const prompt = promptInputRef.current?.value

    if (!videoFile) {
      return
    }

    //Converter o vídeo em áudio sera usao o nabegador do proprio usuário

    const previewURL = useMemo(() => {
      if (!videoFile) {
        return null
      }

      return URL.createObjectURL(videoFile)
    }, [videoFile])
  }
  return (
    