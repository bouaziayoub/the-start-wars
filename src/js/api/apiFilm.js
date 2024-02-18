export async function getFilms() {
  try {
    const response = await fetch(`https://swapi.dev/api/films/`);

    if (!response.ok) {
      throw new Error("HTTP status " + response.status);
    }
    return response.json();
    // procesar datos
  } catch (error) {
    if (error.message.startsWith("HTTP status 404")) {
      alert("Resource not found");
    } else {
      console.error("Error:", error);
      alert(error.message);
    }
  }
}

export async function getDetailsByUrl(dURL) {
  try {
    const response = await fetch(dURL);

    if (!response.ok) {
      throw new Error("HTTP status " + response.status);
    }
    return response.json();
    // procesar datos
  } catch (error) {
    if (error.message.startsWith("HTTP status 404")) {
      alert("Resource not found");
    } else {
      console.error("Error:", error);
      alert(error.message);
    }
  }
}
