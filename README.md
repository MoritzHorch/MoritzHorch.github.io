# Portfolio

This is a personal portfolio about me: Moritz Horch.

## Tooling

In the following, one can find the used technologies.

### Svelte

As I personally use React for work, I wanted to use another tooling for frontend development this time. Svelte itself works at compile time and therefore works without a virtual dom to start and stay fast. Additionally, it brings reactivity to JavaScript without the need for further state management libraries. [[1](#sources)]

### Prettier

In this project I use Prettier as my choice for an opinionated code formatter. Personally, I prefer using widely-known tools and opinionated solutions as they provide steadiness in an ever-changing environment: web development. Prettier supports the editors I'm familiar with (IntelliJ, Visual Studio Code) and can not only format standard JavaScript or TypeScript, but is also extendable and therefore suitable for Svelte. [[2](#sources)]

### ESLint

Even though Svelte comes with a tool called `svelte-check`, it does not provide an additional linter, which includes a larger set of rules that enforce good practices. Just like Prettier, the installed plugins for TypeScript and Svelte provide some steadiness and consistency to the code base. In combination with a tool called Husky which runs commands before a commit, I make sure that code with errors never reaches the remote repository. [[3](#sources)] [[4](#sources)]

Normally, I would configure ESLint to catch Prettier errors while linting, but this does not seem to be supported. [[5](#sources)]

### Vitest & Svelte Testing Library

Vitest is a test runner which shares its configurations and build pipeline with ViteJS. ViteJS is the build tool for this app. In comparison to Jest, additional complexity due to a duplicated setup can be avoided. It provides all needed features for robust unit testing as dom- and module-mocking. [[6](#sources)]

On top of that I use the Testing Library for Svelte. Testing Library provides another level of abstraction on top of Svelte and tests the components like real world scenarios instead of focusing on implementation detail. [[7](#sources)]

Personally, I used the Testing Librar for React as well and rely on known best practices and patterns.

# Sources

[1] Svelte - Cybernetically enhanced web apps, August 2022. [Online]. Available: [https://svelte.dev/](https://svelte.dev/)

[2] Prettier - Opinionated Code Formatter, August 22. [Online]. Available: [https://prettier.io/](https://prettier.io/)

[3] ESLint - The pluggable linting utility for JavaScript and JSX, August 22. [Online]. Available: [https://eslint.org/](https://eslint.org/)

[4] Husky - Modern native Git hooks made easy, August 22. [Online]. Available: [https://eslint.org/](https://eslint.org/)

[5] eslint-plugin-svelte3 - Interactions with other plugins, August 22. [Online]. Available: [Interactions with other plugins](https://github.com/sveltejs/eslint-plugin-svelte3/blob/master/OTHER_PLUGINS.md#eslint-plugin-prettier)

[6] Vitest - Features, August 22. [Online]. Available: [Features](https://vitest.dev/guide/features.html)

[7] Svelte Testing Library - Intro, August 22. [Online]. Available: [Intro](https://testing-library.com/docs/svelte-testing-library/intro)
