const toggleButton = document.getElementById("button_menu");
const navWrapper = document.getElementById("nav");

const btncerrar = () => {
    toggleButton.innerHTML = `
            <svg
              class="close_icon"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1.527 1.464a.25.25 0 0 1 .354 0L8 6.646l5.12-5.182a.25.25 0 0 1 .354 0l.708.707a.25.25 0 0 1 0 .354L9.354 8l5.177 5.12a.25.25 0 0 1 0 .354l-.707.708a.25.25 0 0 1-.354 0L8 9.354l-5.12 5.177a.25.25 0 0 1-.354 0l-.708-.707a.25.25 0 0 1 0-.354L6.646 8 1.464 2.823a.25.25 0 0 1 0-.354l.707-.708z"
              />
            </svg>
          `;
  };
  
const hambur = () => {
    toggleButton.innerHTML = `
    <svg
      class="menu_icon"
      width="16"
      height="16"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
      />
    </svg>
  `;
  };

export {btncerrar, hambur, toggleButton, navWrapper};