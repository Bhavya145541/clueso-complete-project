# Clueso Clone

A functional clone of Clueso.io, a platform for collecting user feedback with AI-powered insights.

## Features

- Browser extension for collecting feedback from web pages
- Dashboard to view collected feedback
- Backend API for data management
- AI integration for insights (mock implementation)

## Architecture

- **Frontend**: React application for the dashboard
- **Backend**: Node.js with Express and MongoDB for data storage
- **Extension**: Chrome extension for feedback collection
- **AI Integration**: Placeholder for AI-powered insights

## Setup Instructions

### Prerequisites

- Node.js and npm
- MongoDB (local or cloud instance)
- Chrome browser for extension testing

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd clueso-clone
   ```

2. Install backend dependencies:
   ```
   cd backend
   npm install
   ```

3. Install frontend dependencies:
   ```
   cd ../frontend
   npm install
   ```

4. Set up environment variables:
   - Create a `.env` file in the backend directory with `MONGO_URI=mongodb://localhost:27017/clueso-clone`

### Running the Application

1. Start the backend server:
   ```
   cd backend
   npm start
   ```

2. Start the frontend:
   ```
   cd ../frontend
   npm start
   ```

3. Load the extension in Chrome:
   - Go to `chrome://extensions/`
   - Enable "Developer mode"
   - Click "Load unpacked" and select the `extension` directory

## Usage

1. Navigate to any website
2. Click the extension icon and select "Collect Feedback"
3. Enter your feedback in the prompt
4. View collected feedback on the dashboard at `http://localhost:3000`

## Demo

[Link to demo video]

## Design

- Used MongoDB for data storage due to its flexibility for feedback data
- Implemented a simple prompt for feedback collection; in a real-world scenario, this would be a more sophisticated UI
- AI insights are mocked; integration with actual AI services would require API keys and additional setup

## Future Improvements

- User authentication and session management
- More advanced feedback forms
- Real AI integration for insights
- Data visualization on the dashboard
