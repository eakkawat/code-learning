# Intructions for installing eslint

1. Uninstall eslint that is installed in frontend folder using command `pnpm --filter frontend uninstall eslint-plugin-react-hooks eslint-plugin-react-refresh typescript-eslint`

2. Run command `npm info "eslint-config-airbnb" peerDependencies` to see the list of peer dependencies

3. Run command `pnpm --filter frontend add -D xxx`. Replace `xxx` with the list of peer dependencies from step 2

4. Run command `pnpm --filter frontend add -D eslint-config-airbnb`

5. Run command `npm info "eslint-config-airbnb-typescript" peerDependencies` to see the list of peer dependencies

6. Run command `pnpm --filter frontend add -D xxx`. Replace `xxx` with the list of peer dependencies from step 5

7. Run command `pnpm --filter frontend add -D eslint-config-airbnb-typescript`

8. Create file `.eslintrc.json` in frontend folder.
