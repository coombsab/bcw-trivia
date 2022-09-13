import { generateId } from "../Utils/generateId.js"

export class Answer {
  constructor(data) {
    this.answer = data.answer
    this.id = data.id || generateId()
    this.questionId = data.questionId
    this.bgColorClass = data.bgColorClass || ""
    this.textColor = data.textColor || ""
  }

  get Template() {
    return /*html*/`
      <div class="col-md-5 text-center border m-2 rounded-2 selectable elevation-2 ${this.bgColorClass} ${this.textColor}" onclick="app.answersController.checkAnswer('${this.id}')">
        <p>${this.answer}</p>
      </div>
    `
  }
}