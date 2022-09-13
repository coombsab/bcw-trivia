import { appState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"

export class Question {
  constructor(data) {
    this.id = data.id || generateId()
    this.category = data.category
    this.type = data.type
    this.difficulty = data.difficulty
    this.question = data.question
    this.correct_answer = data.correct_answer
    this.incorrect_answers = data.incorrect_answers
    this.isAnswered = data.isAnswered || false
    this.randomizedAnswers = data.randomizedAnswers || this.RandomAnswers
    // console.log("randomizedAnswers", this.randomizedAnswers)
  }

  get Template() {
    return /*html*/ `
      <div class="col-md-6 h-100 my-3">
        <div class = "card elevation-1">
          <div class= "card-header d-lg-flex justify-content-lg-between">
              <p>Category: ${this.category}</p>
              <p>Difficulty: ${this.difficulty}</p>
          </div>
          <div class= "card-body">
            <p>Question: ${this.question}</p>
          </div>
          <div class= "card-footer">
            <div class="row justify-content-around">
              ${this.AnswersTemplate}
            </div>
          </div>
        </div>
      </div>
    `
  }

  get RandomAnswers() {
    let randomizedAnswers = []
    let answers = this.incorrect_answers
    answers = [...answers, this.correct_answer]
    randomizedAnswers = answers.sort(function(){return 0.5 - Math.random()})
    return randomizedAnswers
  }

  get AnswersTemplate() {
    // console.log("randomized answers during template call", this.randomizedAnswers)
    let template = ""
    this.randomizedAnswers.forEach(answer => {
      this.Answers.forEach(an => an.answer === answer ? template += an.Template : "")
    })
    return template
  }

  get Answers() {
    return appState.answers.filter(answer => answer.questionId === this.id)
  }
}

// "category": "Mythology",
// "type": "multiple",
// "difficulty": "easy",
// "question": "Who was the only god from Greece who did not get a name change in Rome?",
// "correct_answer": "Apollo",
// "incorrect_answers": [
//   "Demeter",
//   "Zeus",
//   "Athena"
// ]
// }