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
│   └── locales
│       ├── en
│       └── pt-BR
└── src
    └── app
        ├── application
        │   ├── auth
        │   │   ├── api
        │   │   ├── domain
        │   │   │   ├── entities
        │   │   │   └── models
        │   │   ├── services
        │   │   │   ├── confirmation-token
        │   │   └── store
        │   │       ├── actions
        │   │       └── slice
        │   ├── general
        │   │   ├── api
        │   │   ├── domain
        │   │   ├── services
        │   │   ├── store
        │   │   └── toast
        │   │       ├── actions
        │   │       ├── selectors
        │   │       ├── slice
        │   │       └── types
        │   └── user
        │       ├── application
        │       │   ├── api
        │       │   └── services
        │       │       ├── get-user-profile
        │       ├── domain
        │       │   ├── entities
        │       │   └── model
        │       └── store
        │           ├── actions
        │           └── slice
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
