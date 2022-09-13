import { appState } from "../AppState.js"
import { Answer } from "../Models/Answer.js"
import { Pop } from "../Utils/Pop.js"

const bgCorrect = "bg-correct"
const bgIncorrect = "bg-incorrect"
const textAnswered = "text-answered"

class AnswersService {
  checkAnswer(answerId) {
    let answer = appState.answers.find(answer => answer.id === answerId)
    // @ts-ignore
    // console.log("checking for answer", answer.answer)
    // @ts-ignore
    let question = appState.questions.find(question => question.id === answer.questionId)

    // @ts-ignore
    if (answer.answer === question.correct_answer && !question.isAnswered) {
      // @ts-ignore
      // console.log("correct answer!", question.correct_answer)
      // @ts-ignore
      answer.bgColorClass = bgCorrect
      // @ts-ignore
      answer.textColor = textAnswered
      // @ts-ignore
      Pop.toast(`${answer.answer} is correct!\n\nCongratulations!`)
      // @ts-ignore
      question.isAnswered = true
    // @ts-ignore
    } else if (!question.isAnswered){
      // @ts-ignore
      question.Answers.forEach(an => {
        // @ts-ignore
        if (question.correct_answer === an.answer) {
          an.bgColorClass = bgCorrect
          an.textColor = textAnswered
        } else {
          // @ts-ignore
          answer.bgColorClass = bgIncorrect
          // @ts-ignore
          answer.textColor = textAnswered
        }
      })
      // @ts-ignore
      question.isAnswered = true
      // @ts-ignore
      Pop.toast(`${answer.answer} is incorrect.\n\n${question.correct_answer} was correct.`, "warning")
    }
  }
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