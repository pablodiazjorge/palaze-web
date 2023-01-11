import { Component, h } from '@stencil/core';

@Component({
  tag: 'plz-data-table-content',
  styleUrl: 'plz-data-table-content.css',
  shadow: true,
})
export class PlzDataTableContent {

  render() {
    return (
      <slot></slot>
    );
  }

}
