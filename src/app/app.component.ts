import { html, LitElement } from 'lit';
import { appStyle } from './app.style';
import { headingStyles } from './shared/styles/heading.styles.js';
import { customElement } from 'lit/decorators.js';

@customElement('habeeb-app')
export class App extends LitElement {
  static override styles = [appStyle, headingStyles];

  override render() {
    return html`
      <article>
        <section><habeeb-title></habeeb-title></section>
        <section><habeeb-resume></habeeb-resume></section>
      </article>
    `;
  }
}
customElements.define('habeeb-app', App);
