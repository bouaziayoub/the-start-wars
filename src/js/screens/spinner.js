export const spinnerHTML = `
    <div class="preloader-wrapper big active">
    <div class="spinner-layer spinner-blue-only">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div><div class="gap-patch">
        <div class="circle"></div>
      </div><div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>
    </div>
`;
const divMovies = document.getElementById("movies");
export function showSpinner() {
  // Here im usig the spinner...
  
  divMovies.insertAdjacentHTML("beforeend", spinnerHTML);
}
export function hideSpinner() {
  // Here I am removing Spinner
  const spinner = divMovies.querySelector(".preloader-wrapper");
  spinner.parentElement.removeChild(spinner);
}
