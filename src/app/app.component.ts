import { html, LitElement } from 'lit';
import { appStyle } from './app.style';
import { customElement } from 'lit/decorators.js';
import { ScopedElementsMixin } from '@open-wc/scoped-elements';
import { Timeline } from './timeline/timeline/timeline.component';
import { headingStyles } from './shared/styles/heading.style';
import { About } from './about/about.component';

@customElement('habeeb-app')
export class App extends ScopedElementsMixin(LitElement) {
  static get scopedElements() {
    return {
      'habeeb-timeline': Timeline,
      'habeeb-about': About,
    };
  }

  static override styles = [appStyle, headingStyles];

  override render() {
    return html`
      <article>
        <section>
          <h1 class="title">Habeeb Hooshmand</h1>
        </section>
        <section>
          <h2>About me</h2>
          <habeeb-about></habeeb-about>
        </section>
        <section>
          <h2>Experience</h2>
          <habeeb-timeline></habeeb-timeline>
        </section>
      </article>
    `;
  }
}
