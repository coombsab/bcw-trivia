import { appState } from "../AppState.js"
import { questionsService } from "../Services/QuestionsService.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js"

function _drawQuestions() {
  let template = ""
  appState.questions.forEach(question => template += question.Template)
  setHTML("questions", template)
}

export class QuestionsController {
  constructor() {
    appState.on("questions", _drawQuestions)
    appState.on("answers", _drawQuestions)
    this.getQuestions()
  }

  async getQuestions() {
    try {
      await questionsService.getQuestions()
    } catch (error) {
      console.error("[getQuestions]", error)
      Pop.error(error)
    }
  }
}