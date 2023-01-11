import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'plz-button',
  styleUrl: 'plz-button.css',
  shadow: true,
})
export class PlzButton {

  @Prop() variant?: string = "default-color";
  @Prop() size?: string = "default-size"
  @Prop() corners?: string = "default-border";

  render() {
    return (
      <Host>
        <button class={this.variant + " " + this.size + " " + this.corners}>
          <slot></slot>
        </button>
      </Host>
    );
  }

}
