// Importa los plugins necesarios para ESLint
import eslintPluginReact from 'eslint-plugin-react'; // Reglas para React
import eslintPluginReactHooks from 'eslint-plugin-react-hooks'; // Reglas para hooks de React
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y'; // Accesibilidad en JSX
import eslintPluginTypescript from '@typescript-eslint/eslint-plugin'; // Reglas para TypeScript
import parserTypescript from '@typescript-eslint/parser'; // Parser para TypeScript

export default [
  {
    // Configuración del parser y opciones de lenguaje
    languageOptions: {
      parser: parserTypescript, // Usa el parser de TypeScript
      parserOptions: {
        ecmaVersion: 2020, // Versión de ECMAScript
        sourceType: 'module', // Usa módulos ES
        ecmaFeatures: {
          jsx: true, // Habilita JSX
        },
      },
    },
    // Plugins que se usarán en el proyecto
    plugins: {
      '@typescript-eslint': eslintPluginTypescript,
      react: eslintPluginReact,
      'react-hooks': eslintPluginReactHooks,
      'jsx-a11y': eslintPluginJsxA11y,
    },
    // Override para la carpeta generated
    files: ["src/generated/**/*.{ts,tsx,js,jsx}"],
    rules: {
      '@typescript-eslint/no-require-imports': 'off', // Permite require()
      '@typescript-eslint/no-unused-vars': 'off', // Permite variables no usadas
      '@typescript-eslint/no-explicit-any': 'off', // Permite el uso de any
      '@typescript-eslint/no-empty-object-type': 'off', // Permite tipos de objeto vacíos
      'react/prop-types': 'off', // No exige prop-types en componentes React
      'react/jsx-filename-extension': [
        'warn',
        {
          extensions: ['.tsx', '.ts'], // Permite JSX en archivos .tsx y .ts
        },
      ],
    },
  },
];