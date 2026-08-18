import { createDefaultPreset } from "ts-jest";

const defaultPreset = createDefaultPreset();

/** @type {import('jest').Config} */
export default {
  testEnvironment: "node",
  ...defaultPreset,
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        // Força a compilação do TypeScript para CommonJS apenas durante a execução dos testes
        tsconfig: {
          module: "CommonJS",
          moduleResolution: "node",
          verbatimModuleSyntax: false,
        },
      },
    ],
  },
  // Mapeia os imports com extensão .js no código para os arquivos fonte .ts
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
};