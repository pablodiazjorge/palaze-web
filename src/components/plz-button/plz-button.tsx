import { Component, h, Host, Prop, Element, State } from '@stencil/core';

@Component({
  tag: 'plz-button',
  styleUrl: 'plz-button.css',
  shadow: true,
})
export class PlzButton {
  @Prop() variant?: string = 'default';
  @Prop() size?: string = 'default';
  @Prop() color?: string = 'default';
  @Prop() corners?: string = 'default';
  @Prop() shadowColor?: string = '';
  @Prop() icon?: string = '';
  @State() activo: boolean = false;

  @Element() el: HTMLElement;

  /**
   * Method to control when user click in the button type progress
   */
  handleClick() {
    const button = this.el.shadowRoot.querySelector('.progress') as HTMLButtonElement;
    const content = this.el.innerHTML;
    console.log(this.el.innerHTML);
    
    const contentNew =
      "<div class='playa active-load'><div class='wave'></div><div class='wave'></div><div class='wave'></div><div class='wave'></div><div class='wave'></div><div class='wave'></div></div>";
      button.innerHTML = contentNew;
    setTimeout(() => {
      button.innerHTML = content;
    }, 2000);
  }

  render() {
    return this.variant == 'default' ? (
      <Host>
        <button class={this.color + ' ' + this.size + '-size ' + this.corners + '-border pop-shadow-' + this.shadowColor}>
          <slot></slot>
        </button>
      </Host>
    ) : this.variant == 'pop-shadow' ? (
      <Host>
        <button class={this.variant + ' ' + this.color + ' ' + this.size + '-size ' + this.corners + '-border pop-shadow-' + this.shadowColor}>
          <slot></slot>
        </button>
      </Host>
    ) : this.variant == 'icon' ? (
      <Host>
        <button class={this.variant + ' ' + this.variant + '-' + this.size + '-size '}>
          <img class={this.variant + '-' + this.size + '-size'} src={'./assets/icon/Icon-' + `${this.icon}` + '.svg'} alt={`${this.icon}`} />
        </button>
      </Host>
    ) : this.variant == 'progress' ? (
      <Host>
        <button class={this.variant + ' ' + this.color + ' ' + this.size + '-size ' + this.corners + '-border pop-shadow-' + this.shadowColor} onClick={() => this.handleClick()}>
          <slot></slot>
        </button>
      </Host>
    ) : null;
  }
}
