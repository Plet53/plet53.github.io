const emailTemplate = '<form>contact: <input type="submit" value="Click to reveal"></input></form';
const copySVG = `
  <svg
    viewbox="0 0 60 60"

  >
    <rect x="5" y="20" width="30" height="30" fill="none" stroke-width="3" stroke="#000000"/>
    <path d="M20 15 v-10 h30 v30 h-10" fill="none" stroke-width="3" stroke="#000000"/>
  </svg>
`;

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

    this.innerHTML = copySVG;
    this.onclick = async (e) => {
      await navigator.clipboard.writeText('andrewreade53@gmail.com');
    }
  }
}

customElements.define('x-email-reveal', EmailRevealComponent);
customElements.define('x-copy-button', CopyButtonComponent);