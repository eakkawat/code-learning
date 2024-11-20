# Intructions for installing new project for frontend

1. Run the following command to create a new React project: `pnpm create vite@latest frontend`
2. Follow the prompts to set up your project. Choose "React" as the framework and "Typescript" as the variant.
3. Once the project is created, run the following command to install the dependencies: `pnpm --filter "./frontend" install`
4. Install vite-tsconfig-paths: `pnpm --filter "./frontend" add -D vite-tsconfig-paths`
