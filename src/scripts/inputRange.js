export function applyInputRangeStyle() {
    const inputRange = document.querySelector("#range-input");
  
    inputRange.addEventListener("input", (event) => {
      const currentInputValue = event.target.value;
      const runnableTrackProgress = (currentInputValue / inputRange.max) * 100;
  
      inputRange.style.background = `linear-gradient(to right, var(--brand-color-1)) ${runnableTrackProgress}%, var(--gray-color-5) ${runnableTrackProgress}%)`;
    });
  }