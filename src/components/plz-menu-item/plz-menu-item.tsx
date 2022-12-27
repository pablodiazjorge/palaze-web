import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'plz-menu-item',
  styleUrl: 'plz-menu-item.css',
  shadow: true,
})
export class PlzMenuItem {

  @Prop() link: string = "#";

  render() {
    return (
      <li class="option-li">
        <a href={this.link}>
          <slot></slot>
        </a>
      </li>
    );
  }
}
