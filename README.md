# Portfolio

This is a personal portfolio about me: Moritz Horch.

## Tooling

In the following, one can find the used technologies.

### Svelte

As I personally use React for work, I wanted to use another tooling for frontend development this time. Svelte itself works at compile time and therefore works without a virtual dom to start and stay fast. Additionally, it brings reactivity to JavaScript without the need for further state management libraries. [[1](#sources)]

### Prettier

In this project I use Prettier as my choice for an opinionated code formatter. Personally, I prefer using widely-known tools and opinionated solutions as they provide steadiness in an ever-changing environment: web development. Prettier supports the editors I'm familiar with (IntelliJ, Visual Studio Code) and can not only format standard JavaScript or TypeScript, but is also extendable and therefore suitable for Svelte. [[2](#sources)]

### ESLint

Even though Svelte comes with a tool called `svelte-check` it does not provide an additional linter which includes a larger set of rules that enforce good practices. Just like Prettier, the installed plugins for TypeScript and Svelte provide some steadiness and consistency to the code base. ESLint can also be configured to catch and fix Prettier rules. In combination with a tool called Husky which runs commands before a commit, I make sure that code with errors never reaches the remote repository. [[3](#sources)] [[4](#sources)]

# Sources

[1] Svelte - Cybernetically enhanced web apps, August 2022. [Online]. Available: [https://svelte.dev/](https://svelte.dev/)

[2] Prettier - Opinionated Code Formatter, August 22. [Online]. Available: [https://prettier.io/](https://prettier.io/)

[3] ESLint - The pluggable linting utility for JavaScript and JSX, August 22. [Online]. Available: [https://eslint.org/](https://eslint.org/)

[4] Husky - Modern native Git hooks made easy, August 22. [Online]. Available: [https://eslint.org/](https://eslint.org/)
