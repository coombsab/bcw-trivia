import { appState } from "../AppState.js"
import { answersService } from "../Services/AnswersService.js"
import { Pop } from "../Utils/Pop.js"


export class AnswersController {
  constructor() {

  }

  checkAnswer(answerId) {
    try {
      answersService.checkAnswer(answerId)
      appState.emit("answers")
    } catch (error) {
      console.error("[checkAnswer]", error)
      Pop.error(error)
    }
  }
}