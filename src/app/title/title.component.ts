import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators';
import { headingStyles } from '../shared/styles/heading.styles.js';
import { titleStyle } from './title.style.js';

@customElement('habeeb-title')
export class Title extends LitElement {
  static override styles = [titleStyle, headingStyles];

  override render() {
    return html`<section class="title"><h1>Habeeb Hooshmand</h1></section>`;
  }
}
