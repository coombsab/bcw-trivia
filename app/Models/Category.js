export class Category {
  constructor(data) {
    this.name = data.name
    this.index = data.index || "any"
  }
}