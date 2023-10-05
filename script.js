const inputtext = document.getElementById("inputtext");
const addbtn = document.getElementById("addbtn");
const listitem = document.getElementById("list");

addbtn.addEventListener("click", () => {
  if (inputtext.value == "") {
    alert("You must specify a task to add !!");
  } else {
    let listadd = document.createElement("li");
    listadd.innerHTML = inputtext.value;
    listitem.appendChild(listadd);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    listadd.appendChild(span);
  }
  inputtext.value = "";
  saveData();
});

listitem.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName == "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName == "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

const catinput = document.getElementById("inputtextcategory");
const addcatbtn = document.getElementById("addcatbtn");
const catlist = document.getElementById("Category");
var fix = 0;

addcatbtn.addEventListener("click", () => {
  fix = fix + 1;
  if (catinput.value == "") {
    alert("You must specify a category to add !!");
  } else {
    let list = document.createElement("li");
    list.innerHTML = catinput.value;
    if (fix == 1) {
      list.style.backgroundColor = "red";
    } else if (fix == 2) {
      list.style.backgroundColor = "yellow";
    } else if (fix == 3) {
      list.style.backgroundColor = "lightgreen";
    } else {
      fix = 0;
    }
    catlist.append(list);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    list.append(span);
  }
  catinput.value = "";
  savecat();
});

catlist.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName == "SPAN") {
      e.target.parentElement.remove();
      savecat();
    }
  },
  false
);

const cataddbtn = document.getElementById("catadd");
const inputcat = document.getElementById("inputcat");
const done = document.getElementById("done");

// cataddbtn.addEventListener('click' , function() {
//     // inputcat.style.display = "flex";
//     inputcat.classList.toggle("hide");
// }
// )

// done.addEventListener('click' , function() {
//     inputcat.style.display = "none";
// }
// )

const btn = [cataddbtn, done];

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    inputcat.classList.toggle("hide");
    cataddbtn.classList.toggle("hide");
  });
}

const taskbtnhide = document.getElementById("editicon");
const inputtask = document.getElementById("inputtask");
const done2 = document.getElementById("done2");

const tog = [taskbtnhide, done2];
let showedit = false;

// taskbtnhide.addEventListener('click' , function() {
//     const removetask = document.querySelectorAll("#list li span");
//     if (!showedit) {
//         removetask.forEach(function (e) {
//             e.classList.toggle("hide");
//         })
//     }
//     showedit = !showedit;
// })

for (let i = 0; i < tog.length; i++) {
  tog[i].addEventListener("click", function () {
    inputtask.classList.toggle("hide");
    taskbtnhide.classList.toggle("hide");
    const removetask = document.querySelectorAll("#list li span");
    removetask.forEach(function (e) {
      e.classList.toggle("hide");
    });
  });
}

// Local storage of data

function saveData() {
  localStorage.setItem("data", listitem.innerHTML);
}

function showData() {
  listitem.innerHTML = localStorage.getItem("data");
}

function savecat() {
  localStorage.setItem("data2", catlist.innerHTML);
}

function showcat() {
  catlist.innerHTML = localStorage.getItem("data2");
}

showData();
showcat();

// let tasks;

// addbtn.addEventListener('click', (e) => {
//   addtask(inputtext.value);
// });

// function addtask(task) {
//   tasks.append(task);
//   localStorage.listitem("store", JSON.stringify(tasks));
// }

