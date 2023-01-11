import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'plz-colors',
  styleUrl: 'plz-colors.css',
  shadow: true,
})
export class PlzColors {

  render() {
    return (
      <Host>
        <h2>Paleta de azules</h2>
        <div class="blue1"><p>--plz-color-blue-1</p></div>
        <div class="blue2"><p>--plz-color-blue-2</p></div>
        <div class="blue3"><p>--plz-color-blue-3</p></div>
        <div class="blue4"><p>--plz-color-blue-4</p></div>
        <div class="blue5"><p>--plz-color-blue-5</p></div>

        <br />

        <h2>Paleta de verdes</h2>
        <div class="green1"><p>--plz-color-green-1</p></div>
        <div class="green2"><p>--plz-color-green-2</p></div>
        <div class="green3"><p>--plz-color-green-3</p></div>
        <div class="green4"><p>--plz-color-green-4</p></div>
        <div class="green5"><p>--plz-color-green-5</p></div>

        <br />

        <h2>Paleta de rojos</h2>
        <div class="red1"><p>--plz-color-red-1</p></div>
        <div class="red2"><p>--plz-color-red-2</p></div>
        <div class="red3"><p>--plz-color-red-3</p></div>
        <div class="red4"><p>--plz-color-red-4</p></div>
        <div class="red5"><p>--plz-color-red-5</p></div>

        <br />

        <h2>Paleta de negros</h2>
        <div class="black1"><p>--plz-color-black-1</p></div>
        <div class="black2"><p>--plz-color-black-2</p></div>
        <div class="black3"><p>--plz-color-black-3</p></div>
        <div class="black4"><p>--plz-color-black-4</p></div>
        <div class="black5"><p>--plz-color-black-5</p></div>
      </Host>
    );
  }

}
