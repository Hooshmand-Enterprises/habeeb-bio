import { html, LitElement } from 'lit';
import { dropShadowStyle } from '../shared/styles/drop-shadow.style';
import { aboutStyle } from './about.style';

export class About extends LitElement {
  static override styles = [aboutStyle, dropShadowStyle];

  override render() {
    return html`
      <section>
        <div>
          <p>Hi! I'm <strong>Habeeb</strong>.</p>

          <p>
            I am a Senior Front end developer at
            <a
              href="https://www.self.inc/"
              target="_blank"
              rel="noopener noreferrer"
              >Self</a
            >.
          </p>

          <p>
            I am also the founder of <a href="https://hooshmandenterprises.com" target="blank" rel="noopener noreferrer">Hooshmand Enterprises LLC</a>. 
          </p>

          <p>
            I mostly deal with UIs in JavaScript/React using, but I have also built UIs in, Angular 2, and Angular JS
          </p>

          <p>
            Previously, I was a Research Assistant at Texas A&M University
            advised by
            <a
              href="https://people.engr.tamu.edu/caverlee/index.html"
              target="_blank"
              rel="noopener noreferrer"
              >Dr. James Caverlee</a
            >.
          </p>

          <p>
            Check out some of my work:
            <a
              href="https://scholar.google.com/citations?user=iP66x48AAAAJ"
              target="_blank"
              rel="noopener noreferrer"
              >Google Scholar</a
            >,
            <a
              href="https://github.com/habeebmh"
              target="_blank"
              rel="noopener noreferrer"
              >GitHub</a
            >
          </p>
        </div>
        <img src="assets/img/habeeb.webp" alt="Habeeb Hooshmand (me)" />
      </section>
    `;
  }
}
