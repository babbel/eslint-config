// Internal Imports
import {
  buildUncachedResponse,
  defaultRoute,
  alternateRoute,
} from './exampleTypescriptConfigImport.ts';

// Type Imports
import type { APIGatewayProxyEvent, APIGatewayProxyStructuredResultV2 } from 'aws-lambda';

// Lambda Handler
// Request object shape: https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-lambda.html
function lambdaHandler(apiGatewayEvent: APIGatewayProxyEvent): APIGatewayProxyStructuredResultV2 {
  const { path } = apiGatewayEvent;

  try {
    switch (path) {
      case '/alternate':
        return alternateRoute(apiGatewayEvent);
      default:
        return defaultRoute(apiGatewayEvent);
    }
  } catch (error) {
    const errorMessage = `Unexpected routing error encountered for path "${path}"`;
    if (error instanceof Error) {
      console.log(errorMessage, JSON.stringify(error)); // Log to CloudWatch
    }
    const statusCode = path === '/alternate' ? 200 : 500; // Prevent error responses for the alternate route
    return buildUncachedResponse(errorMessage, statusCode);
  }
}

// Module Exports
export { lambdaHandler };
