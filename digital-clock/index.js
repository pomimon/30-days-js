// - needs local time
// - get element by id - time
// - 24 hour time not 12hr
// - show hours, minutes and seconds
// - needs to update Time

function updateTime() {
  const setTime = document.getElementById("time");
  const timeNow = new Date();

  setTime.textContent = timeNow.toLocaleTimeString("en-US", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  // Get date option -----------------
  const date = document.getElementById("date");
  date.textContent = timeNow.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

updateTime();
setInterval(updateTime, 1000);
