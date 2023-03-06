import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'plz-spinner',
  styleUrl: 'plz-spinner.css',
  shadow: true,
})
export class PlzSpinner {
  @Prop() variant: string = 'normal';

  render() {
    return this.variant == 'simple' ? (
      <Host>
        <div class="simple-spinner"></div>
      </Host>
    ) : this.variant == 'normal' ? (
      <Host>
        <div class="spinner">
          <div class="spin"></div>
        </div>
      </Host>
    ) : this.variant == 'wave' ? (
      <Host>
        <div class="playa">
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
        </div>
      </Host>
    ) : this.variant == 'atom' ? (
      <Host>
        <div class="carga">
          <div class="combo"></div>
          <div class="combo"></div>
          <div class="combo"></div>
        </div>
      </Host>
    ) : this.variant == 'bola' ? (
      <Host>
        <div class="bolas">
          <div class="bola"></div>
          <div class="bola"></div>
          <div class="bola"></div>
          <div class="bola"></div>
          <div class="bola"></div>
          <div class="bola"></div>
        </div>
      </Host>
    ) : null;
  }
}
