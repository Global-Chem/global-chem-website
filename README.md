# Global Chemistry's Front Page Website

This is a Next.js project bootstrapped with create-next-app.

Please have at least version 14.0 of Node installed to continue with the setup. Also some sort of node package manager. If you have node installed, npm should be installed with it as well.

## Getting Started

1. Make sure to install all dependencies and follow any prompts given by the program output, you might need to update some outdated packages.

```bash
npm install
```

2. Run the development server:

```bash
npm run dev

or

yarn dev

or

pnpm dev
```

3. Open http://localhost:3000 with your browser to see the result.

## Making Changes

If you are enthusiastic about contributing to this project, you will find the essential information below that will assist you in enhancing its functionality and overall quality. 
When making contributions, please ensure that your pull request (PR) includes details regarding your intended modifications.

### Modify Existing Components
1. You can find the order of the components if you navigate to `src/pages/index.tsx`. 
Each file import will be appropriately named to give you an idea of what is contained in that component and what aspect of the website you will be editing.
2. Proceed to the respective file within the src/components/ directory that corresponds to the component you wish to modify. 
3. Implement your desired changes to enhance or customize the functionality, appearance, or behavior of the component.

### Adding a New Component
1. Create your new component by navigating to `src/components/` and adding a new file.
2. Select a descriptive name for the component that accurately reflects its intended purpose and content.
3. Use the following structure within the file:
```ts
/* Add imports here. */
import React from "react";

/* Add TypeScript interfaces here, if needed. */
type Example = {
  helloWorld: string;
}

export default function Example() {

  return (
    <p> Enter component code here </p>
    )
}
```
4. Customize the component by adding the desired functionality and content within the return statement. 
Modify the JSX code within the component's body to achieve the desired rendering and behavior.



