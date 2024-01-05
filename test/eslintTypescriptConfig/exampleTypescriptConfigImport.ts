// Type Imports
import type { APIGatewayProxyEvent, APIGatewayProxyStructuredResultV2 } from 'aws-lambda';

// Local Functions
function buildUncachedResponse(
  body: string,
  statusCode = 200,
  // eslint-disable-next-line unicorn/no-object-as-default-parameter -- this is a quick example
  headers = { 'Cache-Control': 'no-store' },
) {
  return { body, headers, statusCode };
}

function defaultRoute(apiGatewayEvent: APIGatewayProxyEvent): APIGatewayProxyStructuredResultV2 {
  const { path } = apiGatewayEvent;
  return buildUncachedResponse(`Default route path: ${path}`);
}

function precacheRoute(apiGatewayEvent: APIGatewayProxyEvent): APIGatewayProxyStructuredResultV2 {
  const { path } = apiGatewayEvent;
  return buildUncachedResponse(`Default route path: ${path}`);
}

// Module Exports
export { buildUncachedResponse, defaultRoute, precacheRoute };
