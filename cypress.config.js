const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin,
} = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const webpack = require("@cypress/webpack-preprocessor");

async function setupNodeEvents(cypressOn, config) {
  // implement node event listeners here
  const on = require("cypress-on-fix")(cypressOn);
  await addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin(config)],
    }),    
    webpack({
        webpackOptions: {
          resolve: {
            extensions: [".ts", ".js"],
          },
          module: {
            rules: [
              {
                test: /\.feature$/,
                use: [
                  {
                    loader: "@badeball/cypress-cucumber-preprocessor/webpack",
                    options: config,
                  },
                ],
              },
            ],
          },
        },
      })
  );
  return config;
}
module.exports = defineConfig({
  chromeWebSecurity: false,
  video: false,
  e2e: {
    baseUrl: "https://front.serverest.dev/",
    specPattern: "**/*.feature",
    setupNodeEvents,
    env: {
      hideCredentials: true,
      requestMode: true,
    },
    experimentalInteractiveRunEvents: true,
    experimentalRunAllSpecs: true,
  },
});