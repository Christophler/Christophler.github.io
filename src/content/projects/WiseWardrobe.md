---
title: WiseWardrobe
description: Built an intuitive wardrobe-management web app for organizing clothing, planning outfits, and making everyday wardrobe decisions easier.
date: 2026-03-25
updated: 2026-04-09
featured: true
stack:
  - HTML
  - CSS
  - JavaScript
relatedTags:
  - web-development
  - frontend
  - personal-project
---

### Project Links

[Github Repo - WiseWardrobe](https://github.com/Christophler/WiseWardrobe)

## Context

Choosing what to wear and keeping track of clothing can become difficult when a wardrobe grows beyond what is easy to remember. WiseWardrobe is a web app designed to help users take control of their wardrobe by organizing clothing items, planning outfits, and making it easier to find favorite pieces.

## Role

Designed and developed the application as a hands-on web-development project. The project focused on turning a simple wardrobe-management idea into an intuitive browser-based experience while building practical experience with HTML, CSS, and JavaScript.

## Architecture

```text
  [ User ]
      |
      v
  [ WiseWardrobe web interface ]
      |
      +-- clothing-item management
      +-- wardrobe organization
      +-- outfit planning
      |
      v
  [ Browser-based application ]
```

## Implementation

- Built the user interface with semantic HTML
- Used CSS to create a clear and approachable wardrobe-management experience
- Added JavaScript behavior for interacting with wardrobe and outfit-planning features
- Organized the application around common use cases such as daily outfit selection and vacation wardrobe planning
- Kept the interaction model focused on helping users quickly locate and think about the clothes they own

> **Decision:** Start with a focused browser-based experience. Keeping the first version centered on HTML, CSS, and JavaScript made it possible to validate the core wardrobe workflow before introducing additional platform or backend complexity.

## Outcome

- Created a practical web app for taking control of a personal wardrobe
- Supported use cases including everyday outfit decisions, vacation planning, and remembering where clothing items are stored
- Strengthened foundational skills in frontend structure, styling, and client-side JavaScript
- Turned a familiar everyday problem into a portfolio project with a clear user-focused purpose

## What I'd improve

- Add persistent storage so wardrobe items and outfits remain available between sessions
- Add filtering and search by category, color, season, occasion, or location
- Introduce user accounts and a backend API for securely managing wardrobes across devices
- Add image uploads and previews for clothing items
- Build a responsive mobile-first layout for use while getting dressed or traveling
- Add outfit recommendations based on item attributes, weather, and the user's plans

## How to run locally

Clone the repository, open the project directory, and launch the main HTML file in a browser. For a smoother development workflow, serve the directory with a local static HTTP server so browser behavior matches a deployed web application more closely.
