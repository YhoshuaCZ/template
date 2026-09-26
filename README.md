# [Proyect Name]

## Description
[Proyect Name] is a web application designed to promote knowledge about entity series, including their main characteristics and visual material, covering different genres and eras. This project was developed as part of the Open Source Applications Development course (1ASI0729).

The application integrates with the [Entity API](https://docs.api.entity.api) to fetch real-time entity data and presents it using a modern, accessible, and responsive user interface built with Angular Material.

## Author Information
- **Name:** []
- **Student Code:** U202....
- **Course:** Software Engineering (1ASI0729)
- **Term:** 202620
- **NRC:** 7742

## Technical Stack
- **Framework:** Angular v22+
- **Language:** TypeScript
- **UI Library:** Angular Material
- **State Management:** Angular Signals
- **Internationalization (i18n):** @ngx-translate/core
- **Architecture:** Domain-Driven Design (DDD)

## Architecture
The project strictly follows a Domain-Driven Design (DDD) approach, implementing layered and component-based architecture. The codebase is divided into bounded contexts:
- `shared`: For generic application elements (e.g., layouts, toolbars, language switchers).
- `missions`: Contains all components, entities, and services related to fetching and displaying entity data (following the literal structural requirements of the assessment).

## Features
- **Entity List:** Displays a grid of entity cards with (type paramethers).
- **Internationalization:** Seamless toggle between English (EN) and Spanish (ES) as default language.
- **Entity Details:** External linking to the official MyEntityList page.
- **Share Capability:** Native Web Share API integration (with clipboard fallback) to easily share entity content.
- **Accessibility:** Full ARIA attributes support and human-friendly labels.
