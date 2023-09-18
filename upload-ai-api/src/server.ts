import { fastify } from 'fastify'
import {fastifyCors} from '@fastify/cors'
import{getAllPromptsRoute} from './routes/get-all-prompts'
import { uploadVideoRoute } from "./routes/upload-video"
import {createTranscriptionRoute} from './routes/create-transcription'
import { generateAiCompletionRoute } from "./routes/generate-ai-completion"



/* O fastify é usado para criar as rotas para o servidor funcionar, sendo ele uma ferramenta de produção  O fastify exige que todas as rotas que usam register sejam assincronas ou seja async */

const app = fastify()

app.register(fastifyCors, {
  origin: '*',
})

app.register(getAllPromptsRoute)
app.register(uploadVideoRoute)
app.register(createTranscriptionRoute)
app.register(generateAiCompletionRoute)

app.listen({
  port:3333,
}).then(() => {
  console.log('http Server Running!')
})
