# Keeper App

A simple note-taking web application built with React and Material-UI. Users can add, view, and delete notes. Each note is uniquely identified using UUIDs for reliable management.

## Features

- Add and delete notes
- Responsive UI with Material-UI
- Unique note IDs using [uuid](https://www.npmjs.com/package/uuid)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/keeper-app.git
   cd keeper-app

2. **Install dependencies:**

   npm install

3. **Install Material-UI and UUID:**

   npm install @mui/material @emotion/react @emotion/styled @mui/icons-material uuid

4. **Start the development server:**
    npm start

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

- Click on "Take a note..." to expand the note creation area.
- Enter a title and content, then click the "+" button to add the note.
- Click the delete icon on a note to remove it.

## Customization

- You can extend the app to support editing notes, user authentication, or backend integration (e.g., with PostgreSQL).
