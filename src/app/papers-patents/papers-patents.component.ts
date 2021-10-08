import { html, LitElement } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html';
import { papers } from '../shared/constants/papers.constant';
import { papersPatentsStyle } from './papers-patents.style';

export class PapersPatents extends LitElement {
  static override styles = [papersPatentsStyle];

  override render() {
    return html` <section>
      <h2>
        Check out my all my patents and papers on
        <a
          href="https://scholar.google.com/citations?user=iP66x48AAAAJ"
          target="_blank"
          rel="noopener noreferrer"
          >Google Scholar</a
        >.
      </h2>
      <h2>A selection of work:</h2>
      <ul>
        ${papers.map(
          (paper) =>
            html`<li>
              <div class="title">
                <a href="${paper.url}" target="_blank" rel="noopener noreferrer"
                  >${paper.title}</a
                >
              </div>
              ${paper.year} &mdash; ${unsafeHTML(paper.authors)}
              <p class="description">${paper.description}</p>
            </li>`
        )}
      </ul>
    </section>`;
  }
}
