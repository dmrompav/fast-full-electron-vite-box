export function loaderOff() {
  window.postMessage({ payload: 'removeLoading' }, '*');
}
