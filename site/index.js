const emailTemplate = '<form>contact: <input type="submit" value="Click to reveal"></input></form'

class EmailRevealComponent extends HTMLElement {
  connectedCallback() {
    if (this.querySelector('form')) return;

    this.innerHTML = emailTemplate;
    this.querySelector('form').onsubmit = (e) => {
      e.preventDefault();

      this.innerHTML = 'contact: <a href="mailto:andrewreade53@gmail.com" target="_blank">andrewreade53@gmail.com</a>';
    }
  }
}

customElements.define('x-email-reveal', EmailRevealComponent)