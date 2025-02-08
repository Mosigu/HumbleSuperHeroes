# Humble SuperHeroes

## Project Setup

The easiest way to open this project is to download the repository and work within the provided workspace:

```sh
workspace.code-workspace
```

Inside the workspace, you’ll find two main folders:

- `frontend`
- `backend`

## Frontend

This folder contains the **Next.js** project.  
To start the frontend, run:

```sh
cd frontend
npm run dev
```

Then, open the following URL in your browser:

```sh
http://localhost:3000
```

**The default frontend port is 3000.**

## Backend

This folder contains the **NestJS** project.  
To start the backend, run:

```sh
cd backend
npm run start:dev
```

**The default backend port is 4000.**

## API Structure

The main API functionalities are located in `src/superheroes`, which includes the module, service, and controller.

The main endpoint (using the default port) is:

```sh
http://localhost:4000/superheroes
```

- **GET Request**: Returns superheroes sorted by humility in descending order.
- **POST Request**: Creates a new superhero after the request body is validated. Returns **HTTP 201** upon successful creation.

## Testing

A test file `superheroes.controller.spec.ts` is available. To run the tests, use:

```sh
npm run test
```

## Future Enhancements

Potential improvements for this project:

1. **Data Persistence**

   - Integrate a PostgreSQL database.
   - Use an ORM like Prisma for seamless NestJS integration.

2. **Complete CRUD Functionality**
   - Currently, superheroes cannot be updated or deleted without restarting the server.
   - Adding **update** and **delete** methods would improve usability.

## Team Collaboration

For teamwork, tasks can be distributed among team members, followed by merging completed work.
