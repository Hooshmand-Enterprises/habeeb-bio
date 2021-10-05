import { html, LitElement } from 'lit';
import { classMap } from 'lit/directives/class-map';
import { property } from 'lit/decorators';
import { timelineCardStyle } from './timeline-card.style';

export class TimelineCard extends LitElement {
  @property({ type: String, attribute: true }) number = 0;
  @property({ type: String, attribute: true }) institution = '';
  @property({ type: String, attribute: true }) location = '';
  @property({ type: Array, attribute: true }) positions = [];
  @property({ type: String, attribute: true }) skills = [];

  static override styles = [timelineCardStyle];

  override render() {
    return html`
      <section
        class="cd-timeline-content ${classMap({ right: this.number % 2 == 1 })}"
      >
        <h2>${this.institution}</h2>
        ${this.positions.map(
          ({ start, end, title, description }) =>
            html`
              <section class="timeline-content-info">
                <span>${title}</span>
                <span
                  >${start} - ${end || 'Present'}<br />
                  (${this.timeBetween(start, end)})</span
                >
              </section>
              <p>${description}</p>
            `
        )}
        <ul class="content-skills">
          ${this.skills.map((skill) => html`<li>${skill}</li>`)}
        </ul>
      </section>
    `;
  }

  timeBetween(start: string, end: string | null) {
    const months = this.monthsBetween(start, end);
    const years = Math.floor(months / 12);

    if (years > 0) {
      return `${years} years ${months % 12} months`;
    }

    return `${months} months`;
  }

  yearsBetween(start: string, end: string | null): number {
    let date1;
    let date2;

    if (isNaN(Date.parse(start))) {
      date1 = new Date(start.split(' ').join('1, '));
    } else {
      date1 = new Date(start);
    }

    if (end && isNaN(Date.parse(end))) {
      date2 = new Date(end.split(' ').join('1, '));
    } else {
      date2 = end ? new Date(end) : new Date();
    }

    const yearsDiff = date2.getFullYear() - date1.getFullYear();
    return yearsDiff;
  }

  monthsBetween(start: string, end: string | null): number {
    let date1;
    let date2;

    if (isNaN(Date.parse(start))) {
      date1 = new Date(start.split(' ').join('1, '));
    } else {
      date1 = new Date(start);
    }

    if (end && isNaN(Date.parse(end))) {
      date2 = new Date(end.split(' ').join('1, '));
    } else {
      date2 = end ? new Date(end) : new Date();
    }

    const years = this.yearsBetween(start, end);
    const months = years * 12 + (date2.getMonth() - date1.getMonth());
    return months;
  }
}
