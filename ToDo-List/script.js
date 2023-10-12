var ekleButton = document.querySelector("#ekle");
var todo_text = document.querySelector("#todo-text");
var list_div_ul = document.querySelector("#custom-ul");
ekleButton.addEventListener("click", ekle);
todo_text.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    ekle(e);
  }
});

function escapeHtml(unsafe) {
  return unsafe.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}
function capitalizeFirstLatter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

function ekle(event) {
  if (!(todo_text.value.trim() == "")) {
    var last_li = list_div_ul.querySelector("li:last-child");
    var escape_text = escapeHtml(todo_text.value).trim();
    var cap_first_latter = capitalizeFirstLatter(escape_text);
    var last_li_id = 1;
    if (last_li) {
      last_li_id = parseFloat(last_li.id.split("-")[1]);
    }
    var new_li = document.createElement("li");
    new_li.classList.add("list-group-item", "custom-li", "d-flex");
    new_li.id = "todo-" + (last_li_id + 1);
    new_li.innerHTML = `<div class="li-text text-break">${cap_first_latter}</div>
    <div class="islem-icon position-absolute end-0"">
        <span class="complate-icon">✔️</span>
        <span class="delete-icon">🗑️</span>
    </div>`;
    list_div_ul.appendChild(new_li);

    todo_text.value = ""

    // Yeni li elementine dinleyici ekle
    var deleteIcon = new_li.querySelector(".delete-icon");
    var complateIcon = new_li.querySelector(".complate-icon");
    deleteIcon.addEventListener("click", deleteLi);
    complateIcon.addEventListener("click", complateLi);

  } else if (todo_text.value.trim() == "") {
    var div_container = document.querySelector(".container-sm");
    var new_alert = document.createElement("div");
    new_alert.classList.add(
      "alert",
      "alert-warning",
      "alert-dismissible",
      "show"
    );
    new_alert.setAttribute("role", "alert");
    new_alert.innerHTML = `Lütfen boş bırakmayınız!.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Kapat"></button>`;
    div_container.appendChild(new_alert);

    // Uyarıyı 3 saniye sonra kaldırmak için setTimeout kullan
    setTimeout(function () {
      new_alert.remove();
    }, 3000); 
  }
}

function deleteLi() {
  this.parentElement.parentElement.remove();
}

function complateLi() {
  var parent_elem = this.parentElement
  var li_text_elem = parent_elem.previousElementSibling;
  if (li_text_elem.classList.contains("text-decoration-line-through")) {
    li_text_elem.classList.remove("text-decoration-line-through")
  } else {
    li_text_elem.classList.add("text-decoration-line-through")
  }
}

function complateAllLi() {
  var allLi = document.querySelectorAll("#custom-ul li");
  allLi.forEach((elem) => {
    var todo_text_elem = elem.querySelector(".li-text");
    if(todo_text_elem) {
      var hasLineThrough = todo_text_elem.classList.contains("text-decoration-line-through");
      if (hasLineThrough) {
        todo_text_elem.classList.remove("text-decoration-line-through")
      } else {
        todo_text_elem.classList.add("text-decoration-line-through")
      }
    }
  });
}

function deleteAllLi() {
  var allLi = document.querySelectorAll("#custom-ul li");
  allLi.forEach((elem) => {
    elem.remove()
  })
}

var deleteTodo = document.querySelectorAll(".delete-icon");
deleteTodo.forEach((elem) => {
  elem.addEventListener("click", deleteLi);
});

var complateTodo = document.querySelectorAll(".complate-icon");
complateTodo.forEach((elem) => {
  elem.addEventListener("click", complateLi);
})


var allComplateTodo = document.querySelector(".all-complate-icon");
allComplateTodo.addEventListener("click", complateAllLi);

var allDeleteTodo = document.querySelector(".all-delete-icon");
allDeleteTodo.addEventListener("click", deleteAllLi);