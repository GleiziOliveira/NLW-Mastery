import { FFmpeg } from "@ffmpeg/ffmpeg"
import coreURL from ''../ffmpeg/ffmpeg-core.ts?url"'
import wasmURL from "../ffmpeg/ffmpeg-core.wasm?url"
import workerURL from "../ffmpeg/ffmpeg-worker.js?url"

// o js?url vai carregar/importar via url  tipo um script e irá carregar de forma assincrona e só quando precisar

let ffmpeg: FFmpeg | null

export async function getFFmpeg() {
  if (ffmpeg) {
    return ffmpeg
  }

  ffmpeg = new FFmpeg()

  if (!ffmpeg.loaded) {
    await ffmpeg.load({
      coreURL,
      wasmURL,
      workerURL,
    })
  }

  return ffmpeg
}
