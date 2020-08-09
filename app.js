const burger = document.querySelector(".burger");
const dropdown = document.querySelector("ul");

burger.addEventListener("click", () => {
  dropdown.classList.toggle("hide");
});

function cardMaker(myObj) {
  const container = document.querySelector(".cards-container");
  const card = document.createElement("div");
  const name = document.createElement("h2");
  const top = document.createElement("ul");
  const bottom = document.createElement("ul");
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

  container.appendChild(card);

  card.appendChild(top);
  card.appendChild(bottom);
  top.appendChild(position);
  top.appendChild(name);
  top.appendChild(score);
  top.appendChild(thru);
  top.appendChild(fpts);
  bottom.appendChild(ott);
  bottom.appendChild(app);
  bottom.appendChild(arg);
  bottom.appendChild(put);
  bottom.appendChild(t2g);
  bottom.appendChild(tot);

  name.textContent = myObj.name;
  score.textContent = myObj.score;
  position.textContent = myObj.position;
  thru.textContent = myObj.thru;
  fpts.textContent = myObj.fpts;
  ott.textContent = myObj.ott;
  app.textContent = myObj.app;
  arg.textContent = myObj.arg;
  put.textContent = myObj.put;
  t2g.textContent = myObj.t2g;
  tot.textContent = myObj.tot;

  return card;
}

let testObj = {
  position: "T3",
  name: "dicky woods",
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
