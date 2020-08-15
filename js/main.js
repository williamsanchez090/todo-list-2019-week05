let list = [];
let save = () => {
  list.push(
    `<li id='item${list.length}'><span id='toDo${
      list.length
    }' onclick="strike(${list.length})">${
      document.getElementById("toDo").value
    }</span><button onclick="remove(${
      list.length
    })">&otimes;Delete</button></li>`
  );

  document.getElementById("list").innerHTML = list.reduce((a, b) => a + b);
  console.log(RegExp(/<li>/, "g").test(list.reduce((a, b) => a + b)));

  document.getElementsByTagName("strong")[0].innerHTML =
    +document.getElementsByTagName("strong")[0].innerHTML.slice(0, 1) +
    1 +
    " todos";
};

let remove = (num) => {
  list.splice(num, 1, "");

  document.getElementById("list").innerHTML = list.reduce((a, b) => a + b);
};

let strike = (num) => {
  list[num] = list[num].replace(/span/g, "s");
  list[num] = list[num].replace(/strike/, "unstrike");

  document.getElementById("list").innerHTML = list.reduce((a, b) => a + b);
  document.getElementsByTagName("strong")[0].innerHTML =
    +document.getElementsByTagName("strong")[0].innerHTML.slice(0, 1) -
    1 +
    " todos";
};

let unstrike = (num) => {
  list[num] = list[num].replace(/<s/g, "<span");
  list[num] = list[num].replace(/unstrike/, "strike");

  document.getElementById("list").innerHTML = list.reduce((a, b) => a + b);
  document.getElementsByTagName("strong")[0].innerHTML =
    +document.getElementsByTagName("strong")[0].innerHTML.slice(0, 1) +
    1 +
    " todos";
};

let clearList = () => {
  list = [];
  document.getElementById("list").innerHTML = "";

  document.getElementsByTagName("strong")[0].innerHTML = "0 todos";
};

let clearCompleted = () => {
  list = list.filter((x) => !RegExp(/<s id/, "g").test(x));

  document.getElementById("list").innerHTML = list.reduce((a, b) => a + b);
};
