const emailTemplate = '<form>contact: <input type="submit" value="Click to reveal"></input></form';

function svgTag(color) {
  return `<svg
    viewbox="0 0 55 55"
    width="1em"
    style="vertical-align: center;"
  >
    <rect x="5" y="20" width="30" height="30" fill="none" stroke-width="3" stroke="${color}"/>
    <path d="M20 15 v-10 h30 v30 h-10" fill="none" stroke-width="3" stroke="${color}"/>
  </svg>
`;
}

const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

class EmailRevealComponent extends HTMLElement {
  connectedCallback() {
    if (this.querySelector('form')) return;

    this.innerHTML = emailTemplate;
    this.querySelector('form').onsubmit = (e) => {
      e.preventDefault();

      this.innerHTML = 'contact: <a href="mailto:andrewreade53@gmail.com" target="_blank">andrewreade53@gmail.com</a> <x-copy-button></x-copy-button>';
    }
  }
}

class CopyButtonComponent extends HTMLElement {
  connectedCallback() {
    if (this.querySelector('svg')) return;

    darkQuery.onchange = (ev) => {
      this.innerHTML = svgTag(getComputedStyle(this).getPropertyValue("--textcolor"));
    }

    this.innerHTML = svgTag(getComputedStyle(this).getPropertyValue("--textcolor"));
    this.onclick = async (e) => {
      await navigator.clipboard.writeText('andrewreade53@gmail.com');
      this.innerHTML = svgTag(getComputedStyle(this).getPropertyValue("--greencolor"));
    }
  }
}

customElements.define('x-email-reveal', EmailRevealComponent);
customElements.define('x-copy-button', CopyButtonComponent);