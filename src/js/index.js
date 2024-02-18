require("materialize-css");
import '../styles/materialize.min.css';
import '../styles/main.css';
import { ScreenRegister } from "./screens/screenRegister";
import { ScreenFilm } from "./screens/screenFilms";
import { saveUser } from "./storage/storageUser";


async function initApp() {
  // Mostrar formulario registro usuario
  const screenRegister = new ScreenRegister(
    document.querySelector("#registro")
  );
  screenRegister.show();
  // Once registered, show the movie screen

  screenRegister.getCreatedUser().then((registeredUser) => {
    // Save Session Storage
    saveUser(registeredUser);

    // Hide A register Screen
    screenRegister.hide();

    const pantallaFilms = new ScreenFilm(document.querySelector("#movies"));
    pantallaFilms.show();
  });
}

initApp();
