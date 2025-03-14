// Type Imports
import type { APIGatewayProxyEvent, APIGatewayProxyStructuredResultV2 } from 'aws-lambda';

// Local Functions
function alternateRoute(apiGatewayEvent: APIGatewayProxyEvent): APIGatewayProxyStructuredResultV2 {
  const { path } = apiGatewayEvent;
  return buildUncachedResponse(`Default route path: ${path}`);
}

function buildUncachedResponse(body: string, statusCode = 200) {
  return {
    body,
    headers: {
      'Cache-Control': 'no-store',
      'Content-Type': 'text/html; charset=utf-8',
    },
    statusCode,
  };
}

function defaultRoute(apiGatewayEvent: APIGatewayProxyEvent): APIGatewayProxyStructuredResultV2 {
  const { path } = apiGatewayEvent;
  return buildUncachedResponse(`Default route path: ${path}`);
}

// Module Exports
export { alternateRoute, buildUncachedResponse, defaultRoute };
