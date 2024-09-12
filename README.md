# Harry Cover Website

Harry Cover is a Next.js website designed to help users generate cover letters based on their resume and job description using AI. The website is currently in it v0 with the Cover Letter Builder feature completed. The Dashboard and Resume Builder are still works in progress.

## Features

### Cover Letter Builder (v0)

-   **Import Resume**: Users can upload their resume as a PDF file.
-   **Job Description**: Users can copy and paste the job description.
-   **Generate Cover Letter**: The system generates a cover letter using AI by calling the backend service.

### Dashboard (WIP)

-   A placeholder for future dashboard functionalities.

### Resume Builder (WIP)

-   A placeholder for future resume building functionalities.

## Technologies Used

-   **Next.js**: A React framework for building server-side rendered applications.
-   **v0**: Vercel's AI to generate nextJS code
-   **Tailwind**: To style quickly style and template the website
-   **Vercel**: Hosting and CI/CD using Vercel developer tools.
-   **AI Backend**: The backend service for generating cover letters is available at [harry-cover-backend](https://github.com/brichard42/harry-cover-backend). And hosted at [https://harry-cover.brichard42.com/](https://harry-cover.brichard42.com/)

## Installation

### Prerequisites

-   Node.js
-   npm or yarn

### Steps

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/harry-cover-frontend.git
    cd harry-cover-frontend
    ```

2. Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

3. Create a `.env.local` file and add the following environment variables:

    ```env
    NEXT_PUBLIC_BACKEND_URL=http://your-backend-url
    ```

4. Run the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

The website is hosted using Vercel. To deploy your own version, follow these steps:

1. Push your code to a GitHub repository.
2. Go to [Vercel](https://vercel.com) and import your repository.
3. Follow the prompts to deploy your application.

## Usage

1. **Cover Letter Builder**:

    - Navigate to the Cover Letter Builder page.
    - Upload your resume as a PDF file.
    - Copy and paste the job description.
    - Click on "Generate Cover Letter" to generate the cover letter using AI.

2. **Dashboard**:

    - Currently a placeholder for future functionalities.

3. **Resume Builder**:
    - Currently a placeholder for future functionalities.
