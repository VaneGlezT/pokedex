# ⚡ Pokédex App

A web application developed with Angular 18.0.7, focused on authentication, API consumption, routing, and responsive UI design using Angular Material, Bootstrap, and SCSS.

---

## 🌐 Live Demo

👉 https://pokedex-pink-theta-45.vercel.app/login

---

## 🚀 Technologies used

- Angular 18 (Standalone Components)
- TypeScript
- SCSS
- Bootstrap 5
- Angular Material
- RxJS
- AOS (Animate On Scroll)
- PokéAPI

---

## 🎯 Features

### 🔐 Authentication
- Reactive Forms login system
- Basic session handling with `localStorage`
- Route protection using guards

**Demo credentials:**
- User: `admin`
- Password: `admin`

---

### ⚡ Pokédex
- Pokémon data from PokéAPI
- Parallel requests using `forkJoin`
- Pokémon details:
  - Name
  - Official artwork image
  - Types with dynamic colors
  - Cry sound (audio)
- Selectable Pokémon cards
- Auto-select first Pokémon on load

---

### 🔎 Search system
- Live filtering by name
- Instant UI updates
- Case-insensitive search

---

### 🎨 UI / UX
- Fully responsive design
- Mobile + iPhone Pro Max landscape support
- Scrollable Pokémon list
- Highlight selected Pokémon
- Navbar with logout button
- Dynamic type badges
- AOS animations
- Clean SCSS structure

---

## 🧠 Concepts applied

- Angular Standalone Components
- Reactive Forms
- Routing & Guards
- Services & Dependency Injection
- RxJS (`forkJoin`)
- Structural directives (`@for`)
- Pipes (`titlecase`)
- Two-way binding
- Responsive design (Flex + Media Queries)

---

## 📁 Project structure

```bash
src/
├── app/
│   ├── pages/
│   │   ├── login/
│   │   ├── pokedex-list/
│   ├── guards/
│   ├── services/
│   ├── shared/
│   ├── app.routes.ts
│   ├── app.component.ts
├── assets/
├── styles.scss
⚙️ Installation
npm install
ng serve

Open:

http://localhost:4200
📦 Dependencies
npm install @angular/material
npm install bootstrap
npm install aos
🚧 Status

🟡 In development

Login system completed
Pokédex API integration completed
Search/filter implemented
UI responsive improvements ongoing
👩‍💻 Author

Vanessa Alondra González Tapia
