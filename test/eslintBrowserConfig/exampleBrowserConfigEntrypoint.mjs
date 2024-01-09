// Local Variables
let abortController;
const urlPrefix = '//www.babbel.com';

// Local Functions
function bindEventListeners() {
  document.addEventListener('DOMContentLoaded', () => {
    const { title } = getContentJson();
    document.querySelector('h1').textContent = title;

    document.querySelector('h1').addEventListener('click', (clickEvent) => {
      report({ pageH1: clickEvent.currentTarget.textContent });
    });

    document.querySelector('button.download').addEventListener('click', () => {
      fetchVideo(`${urlPrefix}/video.mp4`);
    });

    document.querySelector('button.abort').addEventListener('click', () => {
      if (abortController) {
        abortController.abort();
        // eslint-disable-next-line no-console -- log aborted download
        console.log('Download aborted');
      }
    });
  });
}

function fetchVideo(url) {
  abortController = new AbortController();
  const { signal } = abortController;
  return fetch(url, { signal })
    .then((response) => {
      // eslint-disable-next-line no-console -- allow success message to be logged
      console.log('Download complete', response);
    })
    .catch((error) => {
      throw new Error(`Download error: ${error.message}`);
    });
}

async function getContentJson() {
  const content = await fetch(`${urlPrefix}/content`);
  const json = await content.json();
  return json;
}

function main() {
  bindEventListeners();
}

function report(data) {
  navigator.sendBeacon(`${urlPrefix}/report`, data);
}

// Begin Execution
main();
