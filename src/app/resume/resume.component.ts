import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators';
import { headingStyles } from '../shared/styles/heading.styles.js';
import { resumeStyle } from './resume.style';

@customElement('habeeb-resume')
export class Resume extends LitElement {
  static override styles = [resumeStyle, headingStyles];
  override render() {
    return html`Resume`;
  }
}
