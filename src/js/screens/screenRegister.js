import { Screen } from "./Screen";
import { createUser } from "../api/apiRegister";

export class ScreenRegister extends Screen {
  constructor(screenRegister) {
    super(screenRegister);
    this.formulario = this.screen.querySelector("form");
    this.createdUser = this.registerSubmit();
  }

  getCreatedUser() {
    return this.createdUser;
  }

  showErrorMessage(message) {
    alert(message);
  }

  registerSubmit() {
    return new Promise((resolve) => {
      this.formulario.addEventListener("submit", async (event) => {
        event.preventDefault();

        //Retrieve form fields
        const user = {};

        const elements = this.formulario.elements;

        [...elements]
          .filter((element) => element.nodeName === "INPUT")
          .forEach((input) => {
            user[input.name] = input.value;
          });

        // Create user
        const response = await createUser(user);

        if (response.success) {
          resolve(response.data);
        } else {
          this.showErrorMessage(response.data);
        }
      });
    });
  }
}
