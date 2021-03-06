
const fetchLocaton = (location) => {
  messageOne.textContent = "Loading..";
  messageTwo.textContent = "";

  fetch(`/weather?address=${location}`).then((res) => {
    res.json().then((data) => {
      if (data.error) {
        messageOne.textContent = data.error;
      } else {
        messageOne.textContent = data.location;
        messageTwo.textContent = data.forecast;
      }
    });
  });
};

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");
const error = document.querySelector("#error");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = search.value;
  fetchLocaton(location);
});
