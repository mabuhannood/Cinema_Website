const movieTitle = () => {
  localStorage.setItem("movie", "The Dark Knight");
};
const buyTicket = () => {
  localStorage.setItem(
    "timeObject",
    JSON.stringify({
      selectedTime: "10:00PM",
      selectedDate: "26 January 2023",
    })
  );
};

document.querySelector("#buy-ticket").addEventListener("click", buyTicket);

document.querySelector(".btn-poster").addEventListener("click", movieTitle);
document.querySelector("#btn-main").addEventListener("click", movieTitle);
