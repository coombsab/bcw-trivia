import { Category } from "./Models/Category"
import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', Value)

  /** @type {import('./Models/Question').Question[]} */
  questions = []

  /** @type {import('./Models/Answer').Answer[]} */
  answers = []

  /** @type {import('./Models/Category').Category[]} */
  categories = [
    new Category({name: "General Knowledge", index: "9"}),
    new Category({name: "Entertainment: Books", index: "10"}),
    new Category({name: "Entertainment: Film", index: "11"}),
    new Category({name: "Entertainment: Music", index: "12"}),
    new Category({name: "Entertainment: Musicals & Theatres", index: "13"}),
    new Category({name: "Entertainment: Television", index: "14"}),
    new Category({name: "Entertainment: Video Games", index: "15"}),
    new Category({name: "Entertainment: Board Games", index: "16"}),
    new Category({name: "Science & Nature", index: "17"}),
    new Category({name: "Science: Computers", index: "18"}),
    new Category({name: "Science: Mathematics", index: "19"}),
    new Category({name: "Mythology", index: "20"}),
    new Category({name: "Sports", index: "21"}),
    new Category({name: "Geography", index: "22"}),
    new Category({name: "History", index: "23"}),
    new Category({name: "Politics", index: "24"}),
    new Category({name: "Art", index: "25"}),
    new Category({name: "Celebrities", index: "26"}),
    new Category({name: "Animals", index: "27"}),
    new Category({name: "Vehicles", index: "28"}),
    new Category({name: "Entertainment: Comics", index: "29"}),
    new Category({name: "Science: Gadgets", index: "30"}),
    new Category({name: "Entertainment: Cartoons & Animations", index: "31"}),
]

  /** @type {import('./Models/Category').Category | null} */
  activeCategory = null
}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
