**Pipe** - Validate data contained in the request/incoming data.
**Guard** - Make sure the user is authenticated.
**Controller** - Route the request to a particular function.
**Service** - Runs some business logic.
**Modules** - Groups together code.
**Repository** - Access a database.
**Filters** - Handles errors taht occur during request handling.
**Interceptors** - Adds extra logic to incoming requests or outgoing responses.

### Setting up Automatic Validation using Validation Pipe

**Steps**

1. Use global validation in main.ts
2. Create a class that describe the different properties that the request body should have
3. Add validation rules to the class.
4. Apply that class to the request handler.

**Validation Pipe BTS**

1. Use class-transformer to turn the body into an instance of the DTO class.
2. Use class-validator to validate the instance.
3. If there are validation errors, respond immediately, otherwise provide body to request handler.
