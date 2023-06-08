# Tenant Boiler Frontend

Project developed to implement a react boilerplate to implement any white label tenant application.

## Running the Project

First step is create a local env file copying the .env.local.example to .env.local

```bash
cp .env.local.example .env.local
```
To install the dependencies

```bash
yarn
```

To run the project

```bash
yarn dev
```

***Note: To work the login and all the remote routes, must run the backend project***


## Project Details

The project use the following `libs`:

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Material UI](https://mui.com/)
- [React Hook Form](https://www.react-hook-form.com/)

## Folder Structure

```
.
├── public
│   ├── assets
│   │   └── icons
│   └── locales (Translation Files)
│       ├── en (For each language two letter ISO code)
└── src
    └── app
        ├── application
        │   ├── auth (Authorization Module)
        │   │   ├── api (Register API Routes)
        │   │   ├── domain
        │   │   │   ├── entities (Any Database entity, example: localstorage field)
        │   │   │   └── models (The API body models)
        │   │   ├── services (Where we add all services that call API routes)
        │   │   │   ├── confirmation-token (Each route call service)
        │   │   └── store (Actions dos slices do React Toolkit)
        │   │       ├── actions
        │   │       └── slice
        ├── core
        │   ├── application
        │   │   ├── http-response
        │   │   └── protocols
        │   ├── domain
        │   │   ├── command
        │   │   ├── either
        │   │   ├── entities
        │   │   └── exceptions
        │   ├── infra
        │   │   ├── cache
        │   │   ├── decoder
        │   │   │   └── jwt-token-decoder
        │   │   └── http
        │   │       ├── autorized-http.client-adapter
        │   │       └── axios-http-client-adapter
        │   ├── store
        │   │   └── adapters
        │   └── types
        ├── main
        │   ├── config
        │   ├── factories
        │   │   └── routes
        │   ├── router
        │   └── types
        └── presentation
            ├── common
            │   ├── constants
            │   │   └── general
            │   ├── enums
            │   ├── helpers
            │   │   └── citites
            │   ├── protocols
            │   └── types
            ├── components
            │   ├── authorization-header
            │   │   ├── actions
            │   │   ├── desktop
            │   │   └── mobile
            │   ├── buttons
            │   │   ├── base-button
            │   │   ├── icon-button
            │   │   ├── outlined
            │   │   └── text-button
            │   ├── carousel
            │   │   ├── carousel
            │   │   ├── dots-navigator
            │   │   └── hooks
            │   ├── checkbox-input
            │   ├── container-grid
            │   ├── error-boundary
            │   ├── footer
            │   ├── full-page-error
            │   ├── full-page-loading
            │   ├── header
            │   │   ├── desktop
            │   │   └── mobile
            │   ├── icons
            │   ├── input-cep
            │   ├── menu-global
            │   ├── modal
            │   │   └── components
            │   │       └── title
            │   ├── more-option
            │   ├── more-option-menu-item
            │   ├── protect-route
            │   ├── select-input
            │   ├── text-input
            │   ├── texts
            │   │   ├── lined-item
            │   │   └── title
            │   └── toast-container
            │       └── components
            │           └── toast
            ├── hooks
            ├── infra
            │   └── formatter
            ├── layout
            │   ├── auth-form-layout
            │   ├── default-layout
            │   └── unauthorized-layout
            ├── pages
            │   ├── confirmation-token-page
            │   ├── dashboard
            │   ├── home
            │   ├── login
            │   │   └── form-login
            │   │       └── form-validation
            │   ├── recovery-password
            │   │   └── form-recovery-password
            │   │       └── form-validation
            │   ├── register
            │   │   └── form-register
            │   │       └── form-validation
            │   ├── reset-password
            │   │   └── form-reset-password
            │   │       └── form-validation
            │   └── user
            │       ├── components
            │       │   └── modal-change-password
            │       │       └── components
            │       │           └── form-change-password
            │       │               └── form-validation
            │       └── form-user
            │           └── form-validation
            └── styles

```

# TODO

- [x] Remove all `index.ts` files.
- [x] Remove entities from domain. (Está certo, é algo que salvamos no storage, entity é tudo que salvamos em banco de dados)
- [x] Create presentation folder inside each folder of app.
- [x] Create a generic Service to handle the repetead http requests.
- [] Delete `api-routes.ts` file from `src/core/domain/api-routes.ts` (Vai ser utilizado no futuro)

## Post Figma Refactor
- [] Fix the colors of the app with figma tokens.
- [] Add all texts to translation files 
- [] Create the themes light and dark of the app.
- [] Review the header and the auth header.