import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'plz-colors',
  styleUrl: 'plz-colors.css',
  shadow: true,
})
export class PlzColors {

  @Prop() variant: string = 'black';

  render() {
    return (
      <Host>
        <div class="container">
          <div class={`${this.variant}1 color`}><p>--plz-color-{this.variant}-1</p></div>
          <div class={`${this.variant}2 color`}><p>--plz-color-{this.variant}-2</p></div>
          <div class={`${this.variant}3 color`}><p>--plz-color-{this.variant}-3</p></div>
          <div class={`${this.variant}4 color`}><p>--plz-color-{this.variant}-4</p></div>
          <div class={`${this.variant}5 color`}><p>--plz-color-{this.variant}-5</p></div>
        </div>
      </Host>
    );
  }

}
