# Intructions for installing new project for backend

1. Run the following command to create backend folder `mkdir backend`

2. Run the following command to install dependencies `pnpm --filter "./backend" add express zod config cors mongoose pino pino-pretty dayjs bcrypt jsonwebtoken lodash nanoid`

3. Run the following command to install dev dependencies `pnpm --filter backend add -D typescript @types/body-parser @types/config @types/cors @types/express @types/node @types/pino @types/bcrypt @types/jsonwebtoken @types/lodash @types/nanoid @types/mongoose ts-node-dev eslint prettier tsconfig-paths eslint-config-prettier eslint-plugin-prettier eslint-plugin-simple-import-sort @typescript-eslint/parser @typescript-eslint/eslint-plugin`
