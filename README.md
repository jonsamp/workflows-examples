# Workflows examples app

This repo has examples of useful EAS Workflows.

## How this project was configured

### Project setup

- Ran `eas build:configure` to configure EAS Build.
- Ran `eas update:configure` to configuer EAS Update.
- Ran `npx expo install expo-dev-client` to make it possible to create development builds.
- Ran `npx expo lint` to add **.eslintrc.js** with the default configuration.
- Ran `yarn add -D prettier eslint-config-prettier eslint-plugin-prettier` to add prettier.
  - Added **.prettierrc** with some configuration.
  - Updated **.easlintrc.js** to use prettier.
  - Added a `format` script to the **package.json** file to run `prettier --write .`.
- Added jest testing with `yarn add -D jest @testing-library/react-native`.
   - Removed `react-test-renderer` and its `@types`.
   - Updated **ThemedTest-test.tsx** to test outputs rather than a snapshot.
- Added `ios.bundleIdentifier` and `android.package` to **app.json**.

### EAS and GitHub setup

- Ran `eas init` to set this project up with EAS.
- Created a GitHub repo for this project with `gh repo create`.
- Linked this project with EAS at https://expo.dev/accounts/[account]/projects/[projectName]/github.
- Ran `eas device:create` to create an ad-hoc provisioning profile for iOS devices.
- Credentials:
  - Ran `eas credentials -p android` to generate a keystore for all build profiles.
  - Ran `eas credentials -p ios` to generate credentials for all build profiles.
  - When adding a build profile, or adding a new ad-hoc provisioning profile, commands will need to be run again.


## Workflows

### Developing
When developing, if you change the native characteristics of the app, like by adding a new dependency with native code, run the following command to create development builds for all platforms.

```
eas workflow:run .eas/workflows/development-builds.yml
```

### Reviewing

The **.eas/workflows/pr.yml** workflow will run on all branches when a commit is pushed. This workflow will lint, format, and test the code. After that, it'll find and display the development builds that work for the branch. Finally, it publishes a preview update that you and your teammates can access inside the "Extensions" tab of a development build, or through expo.dev.

### Releasing

To create a set of production builds and submit them to the apps stores, run the following command:

```
eas workflow:run .eas/workflows/production-builds.yml
```

