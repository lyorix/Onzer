# Onzer

The deezer (almost) next generation user interface.
This project is just a proof of concept, to integrate Angular 7 with the Deezer API.

## Setup

Install the project:
```bash
npm install
```

## Run

Run the project locally on a development server:
```bash
npm start
```
Then, navigate to `http://localhost:4200/` to use the application.

## Test

Run the unit tests:
```bash
npm run test
```

Run the end-to-end tests:
```bash
npm run e2e
```

## Build & deploy

To build a production ready application:
```bash
npm run build-prod
```
The application will be generated under dist folder.

## Project structure

The project is divided in four modules:

* **core**: This module contains all the core reusable components and services, not application related (should be an external npm module).
* **common**: This module contains all the onzer dedicated shared components and services.
* **playlists**: This module is responsible for displaying all the user playlists.
* **playlist**: This module is responsible for showing a given playlist.

### Playlists

The playlists screen can be directly accessed on `http://localhost:4200/playlists`.
Currently, the user for whom the playlists are retrieved is not configurable (default user id: 5).

### Playlist

The playlist screen can be directly accessed on `http://localhost:4200/playlist/:playlistId`.