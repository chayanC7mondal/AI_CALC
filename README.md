



# ChamChum

ChamChum is an interactive drawing and calculation application that turns your browser into a blackboard. Write mathematical expressions, perform calculations, and visualize results directly on the canvas using modern web technologies like React, TypeScript, and TailwindCSS.

## Features

- **Interactive Drawing:** Draw freely on the blackboard-style canvas with adjustable colors.
- **Math Rendering:** Use LaTeX syntax to render mathematical expressions dynamically on the blackboard.
- **Real-time Calculations:** Submit your canvas content for server-side evaluation and display the results seamlessly.
- **Responsive Design:** Adapts to various screen sizes with a user-friendly interface.
- **Draggable Results:** Position your calculations anywhere on the canvas for better organization.

## Technology Stack

- **Frontend:** React, TypeScript, TailwindCSS
- **Backend:** Axios for API communication
- **Additional Libraries:** 
  - MathJax for rendering LaTeX expressions
  - Draggable for repositioning results on the canvas

## Installation

### Prerequisites

- Node.js installed on your system
- A running API server for handling calculations (replace `http://127.0.0.1:8000/calculate` with your backend endpoint)

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/chamchum.git
   cd chamchum
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add your API URL:
   ```
   VITE_API_URL=http://127.0.0.1:8000
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173`.

## Usage

1. Select a color from the palette and start drawing on the blackboard.
2. Press the "Calculate" button to evaluate mathematical expressions.
3. Drag and position results using your mouse for a clear view.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request to suggest improvements or report bugs.

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Description of changes"
   ```
4. Push to your forked repository:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.


- Chayan Mondal
  

