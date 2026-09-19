/*document.addEventListener("DOMContentLoaded", function () {
  const eventBtn = document.getElementById("eventBtn");
  const workshopBtn = document.getElementById("workshopBtn");
  const cards = document.querySelectorAll(".card");
  if (!eventBtn || !workshopBtn) {
    console.warn("Buttons not found");
    return;
  }
  eventBtn.addEventListener("click", function () {
    eventBtn.classList.add("active");
    workshopBtn.classList.remove("active");
    cards.forEach(function (card) {
      if (card.classList.contains("event")) {
        card.classList.remove("hide");
      } else {
        card.classList.add("hide");
      }
    });
  });
  workshopBtn.addEventListener("click", function () {
    workshopBtn.classList.add("active");
    eventBtn.classList.remove("active");
    cards.forEach(function (card) {
      if (card.classList.contains("workshop")) {
        card.classList.remove("hide");
      } else {
        card.classList.add("hide");
      }
    });
  });
});
function registerNow(sessionName) {
  alert("You selected: " + sessionName + "!\nRegistration form will open.");
}
*/
document.addEventListener("DOMContentLoaded", function () {

    const eventBtn = document.getElementById("eventBtn");
    const workshopBtn = document.getElementById("workshopBtn");
    const cards = document.querySelectorAll(".card");

    if (!eventBtn || !workshopBtn) {
        console.warn("Buttons not found");
        return;
    }

    eventBtn.addEventListener("click", function () {

        eventBtn.classList.add("active");
        workshopBtn.classList.remove("active");

        cards.forEach(function (card) {

            if (card.classList.contains("event")) {
                card.classList.remove("hide");
            } else {
                card.classList.add("hide");
            }

        });

    });

    workshopBtn.addEventListener("click", function () {

        workshopBtn.classList.add("active");
        eventBtn.classList.remove("active");

        cards.forEach(function (card) {

            if (card.classList.contains("workshop")) {
                card.classList.remove("hide");
            } else {
                card.classList.add("hide");
            }

        });

    });

});

function registerNow(sessionName) {

    alert(
        "You selected: " +
        sessionName +
        "!\n\nRegistration form will open."
    );

}