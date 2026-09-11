// Removes any service worker left over from an earlier deploy.
//
// This used to be the full Create React App PWA helper, but its register()
// half was never called and relied on CRA's process.env.PUBLIC_URL, which
// does not exist under Vite. Only the unregister path is kept, so the
// behaviour of the app is unchanged.

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}
