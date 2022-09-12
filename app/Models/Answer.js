import { generateId } from "../Utils/generateId.js"

export class Answer {
  constructor(data) {
    this.answer = data.answer
    this.id = data.id || generateId()
    this.questionId = data.questionId
  }

  get Template() {
    return /*html*/`
      <p>${this.answer}</p>
    `
  }
}