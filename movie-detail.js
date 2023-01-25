const divs = document.querySelectorAll(".div-time-slot");

for (const i of divs) {
  i.addEventListener("click", (event) => {
    if (
      event.target.tagName === "BUTTON" &&
      event.target.innerHTML !== "SOLD OUT"
    ) {
      console.log(event.target.innerHTML);
      const selectedTime = event.target.innerHTML;
      const divData = event.target.value;
      console.log(divData);

      localStorage.setItem(
        "timeObject",
        JSON.stringify({
          selectedTime: selectedTime,
          selectedDate: divData,
        })
      );
    }
  });
}
