const multiStepForm = document.querySelector("[data-multi-step]");
const formSteps = [...multiStepForm.querySelectorAll("[data-step]")];
let TCS = document.getElementById("TCS");
let TIS = document.getElementById("TIS");
let MInc = document.getElementById("MInc");
let MSpe = document.getElementById("MSpe");

let currentStep = formSteps.findIndex((step) => {
  return step.classList.contains("active");
});

if (currentStep < 0) {
  currentStep = 0;
  showCurrentStep();
}
let total = 0;

multiStepForm.addEventListener("click", (e) => {
  let incrementor;

  if (e.target.matches("[data-next]")) {
    incrementor = 1;
  } else if (e.target.matches("[data-previous]")) {
    incrementor = -1;
  }
  if (incrementor === 1) {
    total += incrementor;
  }

  console.log(incrementor);
  console.log(total);

  if (total === 2) {
    console.log(TCS.innerHTML);
    console.log(TIS);
    console.log(MInc);
    console.log(MSpe);

    // TCS.innerHTML =
  }

  if (incrementor == null) return;

  const inputs = [...formSteps[currentStep].querySelectorAll("input")];
  const allValid = inputs.every((input) => input.reportValidity());
  if (allValid) {
    currentStep += incrementor;
    showCurrentStep();
  }
});

formSteps.forEach((step) => {
  step.addEventListener("animationend", (e) => {
    formSteps[currentStep].classList.remove("hide");
    e.target.classList.toggle("hide", !e.target.classList.contains("active"));
  });
});

function showCurrentStep() {
  formSteps.forEach((step, index) => {
    step.classList.toggle("active", index === currentStep);
  });
}
