### Dependency Injection

A programming technique in which an object or function receives other object or functions that it requires, as opposed to creating them internally.

### DI Container/Injector Flow

1.At startup, register all classes with the container. 2. Container will figure out what each dependency each class has. 3. We then ask the container to create an instance of a class for us. 4. Container creates all required dependencies and gives us the instance. 5. Container will hold onto the created dependency instances and reuse them if needed.
