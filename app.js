const burger = document.querySelector(".burger");
const dropdown = document.querySelector("ul");

burger.addEventListener("click", () => {
  dropdown.classList.toggle("hide");
});

function cardMaker(myObj) {
  //variables
  const container = document.querySelector(".cards-container");
  const card = document.createElement("div");
  const left = document.createElement("div");
  const right = document.createElement("div");
  const name = document.createElement("h2");
  const top = document.createElement("ul");
  const bottom = document.createElement("ul");
  const sgLeft = document.createElement("div");
  const sgRight = document.createElement("div");
  const position = document.createElement("li");
  const score = document.createElement("li");
  const thru = document.createElement("li");
  const fpts = document.createElement("li");
  const ott = document.createElement("li");
  const app = document.createElement("li");
  const arg = document.createElement("li");
  const put = document.createElement("li");
  const t2g = document.createElement("li");
  const tot = document.createElement("li");
  // classses
  card.classList.add("playerCard");
  top.classList.add("top");
  bottom.classList.add("bottom");
  left.classList.add("left");
  right.classList.add("right");

  // nesting
  container.appendChild(card);
  card.appendChild(top);
  card.appendChild(bottom);
  top.appendChild(left);
  top.appendChild(right);
  left.appendChild(name);
  left.appendChild(position);
  right.appendChild(score);
  right.appendChild(thru);
  right.appendChild(fpts);
  bottom.appendChild(sgLeft);
  bottom.appendChild(sgRight);
  sgLeft.appendChild(ott);
  sgLeft.appendChild(app);
  sgLeft.appendChild(arg);
  sgRight.appendChild(put);
  sgRight.appendChild(t2g);
  sgRight.appendChild(tot);
  //content
  name.textContent = myObj.name;
  score.textContent = myObj.score;
  position.textContent = `Pos: ${myObj.position}`;
  thru.textContent = `Thru: ${myObj.thru}`;
  fpts.textContent = `fPts: ${myObj.fpts}`;
  ott.textContent = `OTT: ${myObj.ott}`;
  app.textContent = `APP: ${myObj.app}`;
  arg.textContent = `ARG: ${myObj.arg}`;
  put.textContent = `PUT: ${myObj.put}`;
  t2g.textContent = `T2G: ${myObj.t2g}`;
  tot.textContent = `TOT: ${myObj.tot}`;
  //return
  return card;
}

let testObj = {
  name: "Dicky Woods",
  position: "T3",
  score: "-4",
  thru: "8",
  fpts: "69.7",
  ott: "2.21",
  app: "-1.1",
  arg: "1.3",
  put: ".08",
  t2g: "0.36",
  tot: "1.7",
};

cardMaker(testObj);

const jeff = {
  name: "Shrek DeSantis",
  position: "7",
  score: "-1",
  thru: "11",
  fpts: "63.7",
  ott: "2.01",
  app: "2.1",
  arg: "-0.3",
  put: "1.8",
  t2g: "-0.36",
  tot: "-1.34",
};

cardMaker(jeff);

const conlan = {
  name: "Christopher Hybrid",
  position: "16",
  score: "+2",
  thru: "F",
  fpts: "48.2",
  ott: "-1.22",
  app: "2.6",
  arg: "-1.4",
  put: "0.05",
  t2g: "-1.13",
  tot: "1.12",
};

cardMaker(conlan);
