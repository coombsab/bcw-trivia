import { appState } from "../AppState.js"
import { Answer } from "../Models/Answer.js"

class AnswersService {
  constructor() {
  
  }

  createAnswers() {
    appState.questions.forEach(question => {
      appState.answers = [...appState.answers, new Answer({answer: question.correct_answer, questionId: question.id})]
      question.incorrect_answers.forEach(incorrect_answer => appState.answers = [...appState.answers, new Answer({answer: incorrect_answer, questionId: question.id})])
    })
  }
}

export const answersService = new AnswersService()