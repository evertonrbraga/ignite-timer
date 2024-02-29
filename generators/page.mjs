export default function (plop) {
  plop.setGenerator('page', {
    description: 'Create a page',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your page name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/pages/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/index.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/pages/{{pascalCase name}}/styles.ts',
        templateFile: 'templates/styles.ts.hbs'
      },
      {
        type: 'add',
        path: '../src/pages/{{pascalCase name}}/stories.tsx',
        templateFile: 'templates/pageStories.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/pages/{{pascalCase name}}/types.ts',
        templateFile: 'templates/types.ts.hbs'
      },
      {
        type: 'add',
        path: '../src/pages/{{pascalCase name}}/test.tsx',
        templateFile: 'templates/test.tsx.hbs'
      }
    ]
  })
}
