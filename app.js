import Singleton from "./singleton.js";

const btnA = document.getElementById("createA");
const btnB = document.getElementById("createB");
const btnCompare = document.getElementById("compare");

const instAEl = document.getElementById("instA");
const instBEl = document.getElementById("instB");
const resultEl = document.getElementById("result");

let instanceA = null;
let instanceB = null;

// Button for Instance A
btnA.addEventListener("click", () => {
  instanceA = Singleton.getInstance({ createdBy: "A" });
  instAEl.textContent =
    `id=${instanceA.id}, createdAt=${instanceA.createdAt}, payload=${instanceA.payload.createdBy}`;
  resultEl.textContent = "";
});

// Button for Instance B
btnB.addEventListener("click", () => {
  instanceB = new Singleton({ createdBy: "B" });
  instBEl.textContent =
    `id=${instanceB.id}, createdAt=${instanceB.createdAt}, payload=${instanceB.payload.createdBy}`;
  resultEl.textContent = "";
});

// Compare A and B
btnCompare.addEventListener("click", () => {
  if (!instanceA || !instanceB) {
    resultEl.textContent = "⚠️ Create both instances first.";
    return;
  }

  const same = instanceA === instanceB;

  resultEl.textContent = same
    ? "✅ Both A and B reference the SAME Singleton instance."
    : "❌ They are different instances.";
});
