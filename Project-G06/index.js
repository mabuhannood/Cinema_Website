const movieTitle = () => {
    localStorage.setItem("movie", "Dark Knight")
}


document.querySelector(".btn-poster").addEventListener("click", movieTitle)
document.querySelector("#btn-main").addEventListener("click", movieTitle)