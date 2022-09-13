import { appState } from "../AppState.js"
import { Question } from "../Models/Question.js"
import { answersService } from "./AnswersService.js"
import { triviaServer } from "./AxiosService.js"

class QuestionsService {
  constructor() {
  }

  // /api.php?amount=10
  async getQuestions() {
    // Categories
    // Mythology 20
    // Geography 22
    const response = await triviaServer.get("/api.php", {
      params: {
        amount: 10,
        category: 20
      }
    })
    // console.log(response.data.results)
    appState.questions = response.data.results.map(rawData => new Question(rawData))
    // console.log(appState.questions)
    answersService.createAnswers()
  }
}

export const questionsService = new QuestionsService()