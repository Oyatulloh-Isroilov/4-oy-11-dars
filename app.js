const Input = document.getElementById("input");
const ListBlock = document.getElementsByClassName("list-block");
function AddTask() {
  if (Input.value === "") {
    alert("You have not entered any information");
  } else {
    let li = document.createElement("li");
    li.innerHTML = Input.value;
    ListBlock.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  Input.value = "";
}

ListBlock.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked1");
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
    }
  },
  false
);
