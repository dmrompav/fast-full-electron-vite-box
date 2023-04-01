import { domReady, DOMappend, DOMremove } from './helpers';

export class Loader {
  htmlDiv: HTMLElement | undefined;
  htmlStyle: HTMLStyleElement | undefined;

  constructor() {
    this.htmlStyle = document.createElement('style');
    this.htmlDiv = document.createElement('div');

    this.render();
  }

  render() {
    const divClassName = `electron-loader`
    const styleContent = `
      @keyframes square-spin {
        25% { transform: perspective(100px) rotateX(180deg) rotateY(0); }
        50% { transform: perspective(100px) rotateX(180deg) rotateY(180deg); }
        75% { transform: perspective(100px) rotateX(0) rotateY(180deg); }
        100% { transform: perspective(100px) rotateX(0) rotateY(0); }
      }
      .${divClassName}_square > div {
        width: 50px; height: 50px; border-radius: 12px;
        background: #e5e5e5;
        animation-fill-mode: both;
        animation: square-spin 3s 0s cubic-bezier(0.09, 0.57, 0.49, 0.9) infinite;
      }
      .${divClassName} {
        position: fixed; top: 0; left: 0;
        width: 100vw; height: 100vh;
        display: flex; align-items: center; justify-content: center;
        background: #3c3c3c;
      }
    `

    this.htmlStyle.id = 'app-loading-style';
    this.htmlStyle.innerHTML = styleContent;
    this.htmlDiv.innerHTML = `
      <div class="${divClassName}">
        <div class="${divClassName}_square">
          <div></div>
        </div>
      </div>`;
  }

  launch() {
    domReady().then(() => this.appendLoading());
    window.onmessage = (e) => {
      if (e.data.payload === 'removeLoading') {
        this.removeLoading();
      }
    };
  }

  appendLoading() {
    DOMappend(document.head, this.htmlStyle);
    DOMappend(document.body, this.htmlDiv);
  }
  removeLoading() {
    DOMremove(document.head, this.htmlStyle);
    DOMremove(document.body, this.htmlDiv);
  }
}


