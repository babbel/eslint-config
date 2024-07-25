// Local Variables
const reportUrl = '//www.babbel.com/report';

// Local Functions
async function reportBrowserUserAgent() {
  // eslint-disable-next-line n/no-unsupported-features/node-builtins -- only runs in browsers
  const { userAgent } = navigator;
  await postRequest(reportUrl, { browserUserAgent: userAgent });
}

async function reportNodeVersion() {
  const { version } = process;
  await postRequest(reportUrl, { nodeVersion: version });
}

function isNode() {
  return Boolean(process);
}

async function main() {
  await (isNode() ? reportNodeVersion() : reportBrowserUserAgent());
}

function postRequest(url, data = {}) {
  // eslint-disable-next-line n/no-unsupported-features/node-builtins -- fetch() is experimental but functional in Node 18.18.0+
  return fetch(url, {
    body: JSON.stringify(data),
    cache: 'no-store',
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
  });
}

// Begin Execution
await main();
