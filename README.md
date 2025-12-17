# Interviewer AI

Interviewer AI is a web application designed to assist with the interview process by leveraging AI to analyze resumes. Users can create an account, upload a resume in PDF format, and the application will process and store the resume's content for further analysis.

## Features

- **User Management:** Create and manage user accounts.
- **Resume Upload:** Upload resumes in PDF format.
- **Text Extraction:** Automatically extracts text content from the uploaded PDFs.
- **AI-Powered Embedding:** Generates vector embeddings from the resume text for semantic analysis (powered by OpenAI).
- **Vector Storage:** Stores resume embeddings in a PostgreSQL database with vector support.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Database:** [PostgreSQL](https://www.postgresql.org/) (recommended with [NeonDB](https://neon.tech/) for serverless environments)
- **ORM:** [Prisma](https://www.prisma.io/)
- **AI/Embeddings:** [OpenAI](https://openai.com/), [LangChain](https://www.langchain.com/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/) (v20 or later recommended)
- [npm](https://www.npmjs.com/)
- A PostgreSQL database instance. The schema requires the `vector` extension. You can enable it by running `CREATE EXTENSION IF NOT EXISTS vector;` in your database.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd interviewer-ai
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a file named `.env` in the root of the project and add the following variables.

    ```env
    # Example for a PostgreSQL connection string
    DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?sslmode=require"

    # Your OpenAI API Key for generating embeddings
    OPENAI_API_KEY="sk-..."
    ```

4.  **Apply database migrations:**
    Run the following command to sync your database schema with the Prisma schema.
    ```bash
    npx prisma db push
    ```

5.  **Run the development server:**
    ```bash
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## API Endpoints

The application exposes the following REST API endpoints:

-   `POST /api/user`: Creates a new user.
    -   **Body:** `{ "email": "user@example.com", "name": "John Doe" }`
-   `POST /api/upload`: Uploads a PDF resume.
    -   **Body:** `FormData` with a `file` (the PDF) and `userId`.
-   `GET /api/health`: A simple health check endpoint.