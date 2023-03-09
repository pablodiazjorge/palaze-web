import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'plz-spinner',
  styleUrl: 'plz-spinner.css',
  shadow: true,
})
export class PlzSpinner {
  @Prop() variant: string = 'normal';
  @Prop() colorPrimary: string = '#023E8A'; //blue-1
  @Prop() colorSecondary: string = '#a7b3e9'; //blue-4
  @Prop() colorsBola: string = '#023E8A,#a7b3e9,#023E8A,#0096C7,#0077B6,#0096C7';
  private colorsBolaArray: string[] = [];

  connectedCallback() {
    this.convertStringToArray();
  }

  convertStringToArray() {
    this.colorsBolaArray = this.colorsBola.split(',').map(color => color.trim());
  }

  render() {
    return this.variant == 'simple' ? (
      <Host>
        <div class="simple-spinner" style={{ 'border': `8px solid ${this.colorPrimary}`, 'border-left': `8px solid ${this.colorSecondary}` }}></div>
      </Host>
    ) : this.variant == 'normal' ? (
      <Host>
        <div class="spinner" style={{ border: `10px solid ${this.colorSecondary}` }}>
          <div class="spin" style={{ 'border-left': `5px solid ${this.colorPrimary}` }}></div>
        </div>
      </Host>
    ) : this.variant == 'wave' ? (
      <Host>
        <div class="playa">
          <div class="wave" style={{ background: `linear-gradient(80deg, ${this.colorPrimary}, ${this.colorSecondary}` }}></div>
          <div class="wave" style={{ background: `linear-gradient(80deg, ${this.colorPrimary}, ${this.colorSecondary}` }}></div>
          <div class="wave" style={{ background: `linear-gradient(80deg, ${this.colorPrimary}, ${this.colorSecondary}` }}></div>
          <div class="wave" style={{ background: `linear-gradient(80deg, ${this.colorPrimary}, ${this.colorSecondary}` }}></div>
          <div class="wave" style={{ background: `linear-gradient(80deg, ${this.colorPrimary}, ${this.colorSecondary}` }}></div>
          <div class="wave" style={{ background: `linear-gradient(80deg, ${this.colorPrimary}, ${this.colorSecondary}` }}></div>
        </div>
      </Host>
    ) : this.variant == 'atom' ? (
      <Host>
        <div class="carga">
          <div class="combo" style={{ 'border-bottom': `5px solid ${this.colorPrimary}` }}></div>
          <div class="combo" style={{ 'border-bottom': `5px solid ${this.colorPrimary}` }}></div>
          <div class="combo" style={{ 'border-bottom': `5px solid ${this.colorPrimary}` }}></div>
        </div>
      </Host>
    ) : this.variant == 'bola' ? (
      <Host>
        <div class="bolas">
          <div class="bola" style={{ '--color-bola-0': `${this.colorsBolaArray[0]}` }}></div>
          <div class="bola" style={{ '--color-bola-1': `${this.colorsBolaArray[1]}` }}></div>
          <div class="bola" style={{ '--color-bola-2': `${this.colorsBolaArray[2]}` }}></div>
          <div class="bola" style={{ '--color-bola-3': `${this.colorsBolaArray[3]}` }}></div>
          <div class="bola" style={{ '--color-bola-4': `${this.colorsBolaArray[4]}` }}></div>
          <div class="bola" style={{ '--color-bola-5': `${this.colorsBolaArray[5]}` }}></div>
        </div>
      </Host>
    ) : null;
  }
}
