import { Component, h, Prop } from '@stencil/core';
import hljs from 'highlight.js/lib/core';
import xml from 'highlight.js/lib/languages/xml';
hljs.registerLanguage('xml', xml);
// import 'highlight.js/styles/github.css';


@Component({
  tag: 'plz-showcase-code',
  styleUrl: 'plz-showcase-code.css',
  shadow: true,
})
export class PlzShowcaseCode {

  @Prop() textCode: string;

  getCodeFormat() {
    return hljs.highlight(this.textCode, { language: 'html' }).value;
  }

  render() {
    return (
      <div>
        <pre class='parent'>
          <code class="language-html" innerHTML={this.getCodeFormat()}>
          </code>
        </pre>
      </div>
    );
  }

}
