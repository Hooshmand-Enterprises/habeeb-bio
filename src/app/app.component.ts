import { html, LitElement } from 'lit';
import { appStyle } from './app.style';
import { customElement } from 'lit/decorators.js';
import { ScopedElementsMixin } from '@open-wc/scoped-elements';
import { Timeline } from './timeline/timeline/timeline.component';
import { headingStyles } from './shared/styles/heading.style';
import { About } from './about/about.component';
import { PapersPatents } from './papers-patents/papers-patents.component';

@customElement('habeeb-app')
export class App extends ScopedElementsMixin(LitElement) {
  static get scopedElements() {
    return {
      'habeeb-timeline': Timeline,
      'habeeb-about': About,
      'habeeb-papers-patents': PapersPatents,
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
          <habeeb-about></habeeb-about>
        </section>
        <section>
          <h2>Career & Education</h2>
          <habeeb-timeline></habeeb-timeline>
        </section>
        <section>
          <h2>Papers & Patents</h2>
          <habeeb-papers-patents></habeeb-papers-patents>
        </section>
      </article>
    `;
  }
}
