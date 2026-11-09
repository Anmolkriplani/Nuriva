# Nuriva

**A healthcare support platform designed to make navigating health information, care, and support more approachable.**

Nuriva is an early-stage full-stack project focused on creating a more accessible and supportive healthcare experience. It aims to bring health-related resources, personal care journeys, and support features together in one platform.

The project is currently under active development.

## Project Vision

Navigating healthcare can be overwhelming. Nuriva aims to simplify that experience through an approachable interface, guided onboarding, and a platform designed around patients and their support networks.

## Current Development

The project currently includes:

- A Next.js-based frontend with a landing page.
- Initial login and registration interface.
- Guided onboarding pages.
- Health and profile onboarding screens.
- Patient welcome and support pages.
- Reusable UI components and brand elements.
- An Express.js backend foundation.
- MongoDB connection configuration using Mongoose.

These are the current development foundations, not a claim that the complete healthcare platform is operational.

## Planned Features

- Patient-focused health journeys.
- Caregiver and guardian support.
- Verified healthcare professional discovery.
- Appointment scheduling.
- Digital health document management.
- Personal health journal and calendar.
- Accessible navigation and user guidance.
- Miso, a friendly in-app assistant.

Features will be developed and validated incrementally.

## Technology Stack

| Layer | Technologies |
|---|---|
| Frontend | Next.js, React, TypeScript |
| Styling | Tailwind CSS |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Development tools | Git, GitHub, VS Code |

## Project Structure

```text
nuriva/
├── frontend/
│   ├── app/
│   ├── public/
│   ├── src/
│   └── package.json
│
├── backend/
│   ├── config/
│   ├── server.js
│   └── package.json
│
├── ai/
├── assets/
├── database/
├── docs/
├── .gitignore
└── README.md
```

## Getting Started

### Prerequisites

- Node.js and npm
- MongoDB database
- Git

### 1. Clone the repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
cd nuriva
```

### 2. Set up the frontend

```bash
cd frontend
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

### 3. Set up the backend

Open a separate terminal:

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
CLIENT_URL=http://localhost:3000
```

Start the backend:

```bash
npm run dev
```

The backend runs on port `5000` by default.

**Important:** Keep environment variables and credentials private. Never commit your `.env` file.

## Design Direction

Nuriva follows a calm, approachable visual direction using teal, green, and warm accent colours. Its design aims to make healthcare interactions feel welcoming and easier to navigate.

## Roadmap

- [x] Initial frontend project setup
- [x] Landing page foundation
- [x] Reusable UI components
- [x] Initial onboarding interfaces
- [x] Backend server foundation
- [ ] Complete frontend-backend integration
- [ ] Implement authentication
- [ ] Develop patient and caregiver workflows
- [ ] Implement core healthcare platform features
- [ ] Develop and integrate the Miso assistant
- [ ] Testing and deployment

## Project Status

Nuriva is a work in progress. Features, architecture, and implementation are subject to change as development continues.

---

**Built with the goal of making healthcare navigation more approachable.**