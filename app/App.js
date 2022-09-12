import { AnswersController } from "./Controllers/AnswersController.js";
import { QuestionsController } from "./Controllers/QuestionsController.js";

class App {
  questionsController = new QuestionsController()
  answersController = new AnswersController()
}

window["app"] = new App();
