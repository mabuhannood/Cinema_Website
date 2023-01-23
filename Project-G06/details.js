const divs = document.querySelectorAll(".div-time-slot");
for (const i of divs) {
  i.addEventListener("click", (event) => {
    if (
      event.target.tagName === "BUTTON" &&
      event.target.innerHTML !== "SOLD OUT"
    ) {
      const selectedTime = event.target.innerHTML;
      const divData = event.target.value;

      localStorage.setItem(
        "timeObject",
        JSON.stringify({
          selectedTime: selectedTime,
          selectedDate: divData,
        })
      );
      window.location.href = "purchase.html";
    }
  });
}
