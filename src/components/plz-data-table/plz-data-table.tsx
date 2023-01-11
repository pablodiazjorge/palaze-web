import { Component, h } from '@stencil/core';

@Component({
  tag: 'plz-data-table',
  styleUrl: 'plz-data-table.css',
  shadow: true,
})
export class PlzDataTable {

  render() {
    return (
      <table>
        <tr>
          <th>Nombre</th>
          <th>Descripción</th>
          <th>Nomenclaturas</th>
          <th>Por defecto</th>
        </tr>
        <tr>
          <td>
            dsdsd
          </td>
        </tr>
        <tr>
          <td>
            sdsdsd
          </td>
        </tr>
        <tr>
          <td>
            sdsds
          </td>
        </tr>
        <tr>
          <td>
            sdsd
          </td>
        </tr>
      </table>
    );
  }

}
