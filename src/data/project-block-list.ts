import { Category, Block, BlockType } from "~/types";
import dedent from "ts-dedent";

export const ProjectBlockList: Block[] = [
  {
    name: "Title and Description",
    category: Category.Project,
    type: BlockType.Single,
    markdown: dedent`
    # Project Title

    A brief description of what this project does and who it's for

    `,
  },
  {
    name: "Run Locally",
    category: Category.Project,
    type: BlockType.Single,
    markdown: dedent`
    ## Run Locally
    
    Clone the project

    \`\`\`bash
      git clone https://link-to-project
    \`\`\`

    Go to the project directory

    \`\`\`bash
      cd my-project
    \`\`\`

    Install dependencies

    \`\`\`bash
      npm install
    \`\`\`

    Start the server

    \`\`\`bash
      npm run start
    \`\`\`

`,
  },
  {
    name: "API Reference",
    category: Category.Project,
    type: BlockType.Single,
    markdown: dedent`
    ## API Reference

    #### Get all items

    \`\`\`http
      GET /api/items
    \`\`\`

    | Parameter | Type     | Description                |
    | :-------- | :------- | :------------------------- |
    | \`api_key\` | \`string\` | **Required**. Your API key |

    #### Get item

    \`\`\`http
      GET /api/items/$\{id}
    \`\`\`

    | Parameter | Type     | Description                       |
    | :-------- | :------- | :-------------------------------- |
    | \`id\`      | \`string\` | **Required**. Id of item to fetch |

    #### add(num1, num2)

    Takes two numbers and returns the sum.

`,
  },
  {
    name: "Running Tests",
    category: Category.Project,
    type: BlockType.Single,
    markdown: dedent`
    ## Running Tests

    To run tests, run the following command

    \`\`\`bash
      npm run test
    \`\`\`

`,
  },
  {
    name: "Authors",
    category: Category.Project,
    type: BlockType.Single,
    markdown: dedent`
    ## Authors

    - [@G3root](https://github.com/G3root)

`,
  },
  {
    name: "Badges",
    category: Category.Project,
    type: BlockType.Single,
    markdown: dedent`
    ## Badges
    
    Add badges from somewhere like: [shields.io](https://shields.io/)
    
    [![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)
    [![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
    [![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)

  `,
  },
  {
    name: "Contributing",
    category: Category.Project,
    type: BlockType.Single,
    markdown: dedent`
    ## Contributing

    Contributions are always welcome!

    See \`contributing.md\` for ways to get started.

    Please adhere to this project's \`code of conduct\`.

`,
  },
  {
    name: "Demo",
    category: Category.Project,
    type: BlockType.Single,
    markdown: dedent`
    ## Demo

    Insert gif or link to demo

`,
  },
  {
    name: "Deployment",
    category: Category.Project,
    type: BlockType.Single,
    markdown: dedent`
    ## Deployment

    To deploy this project run

    \`\`\`bash
      npm run deploy
    \`\`\`

`,
  },
  {
    name: "Documentation",
    category: Category.Project,
    type: BlockType.Single,
    markdown: dedent`
    ## Documentation

    [Documentation](https://linktodocumentation)

`,
  },
  {
    name: "Environment Variables",
    category: Category.Project,
    type: BlockType.Single,
    markdown: dedent`
    ## Environment Variables

    To run this project, you will need to add the following environment variables to your .env file

    \`API_KEY\`

    \`ANOTHER_API_KEY\`

`,
  },
  {
    name: "FAQ",
    category: Category.Project,
    type: BlockType.Single,
    markdown: dedent`
    ## FAQ

    #### Question 1

    Answer 1

    #### Question 2

    Answer 2

`,
  },
  {
    name: "Features",
    category: Category.Project,
    type: BlockType.Single,
    markdown: dedent`
    ## Features

    - Light/dark mode toggle
    - Live previews
    - Fullscreen mode
    - Cross platform

`,
  },
  {
    name: "Feedback",
    category: Category.Project,
    type: BlockType.Single,
    markdown: dedent`
    ## Feedback

    If you have any feedback, please reach out to us at fake@fake.com

`,
  },
  {
    name: "Installation",
    category: Category.Project,
    type: BlockType.Single,
    markdown: dedent`
    ## Installation 
    
    Install my-project with npm

    \`\`\`bash
    npm install my-project
    cd my-project
    \`\`\`

`,
  },
  {
    name: "Lessons",
    category: Category.Project,
    type: BlockType.Single,
    markdown: dedent`
    ## Lessons Learned

    What did you learn while building this project? What challenges did you face and how did you overcome them?

`,
  },
  {
    name: "License",
    category: Category.Project,
    type: BlockType.Single,
    markdown: dedent`
    ## License

    [MIT](https://choosealicense.com/licenses/mit/)

`,
  },
  {
    name: "Logo",
    category: Category.Project,
    type: BlockType.Single,
    markdown: dedent`
    ![Logo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/th5xamgrr6se0x5ro4g6.png)

`,
  },
  {
    name: "Optimizations",
    category: Category.Project,
    type: BlockType.Single,
    markdown: dedent`
    ## Optimizations

    What optimizations did you make in your code? E.g. refactors, performance improvements, accessibility

`,
  },
  {
    name: "Related",
    category: Category.Project,
    type: BlockType.Single,
    markdown: dedent`
    ## Related

    Here are some related projects

    [Awesome README](https://github.com/matiassingers/awesome-readme)

`,
  },
  {
    name: "Roadmap",
    category: Category.Project,
    type: BlockType.Single,
    markdown: dedent`
    ## Roadmap

    - Additional browser support
    - Add more integrations

`,
  },
  {
    name: "Acknowledgements",
    category: Category.Project,
    type: BlockType.Single,
    markdown: dedent`
    ## Acknowledgements

    - [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
    - [Awesome README](https://github.com/matiassingers/awesome-readme)
    - [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)

`,
  },
  {
    name: "Screenshots",
    category: Category.Project,
    type: BlockType.Single,
    markdown: dedent`
    ## Screenshots

    ![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

`,
  },
  {
    name: "Support",
    category: Category.Project,
    type: BlockType.Single,
    markdown: dedent`
    ## Support

    For support, email fake@fake.com or join our Slack channel.

`,
  },
  {
    name: "Tech Stack",
    category: Category.Project,
    type: BlockType.Single,
    markdown: dedent`
    ## Tech Stack

    **Client:** React, Redux, TailwindCSS

    **Server:** Node, Express

`,
  },
  {
    name: "Appendix",
    category: Category.Project,
    type: BlockType.Single,
    markdown: dedent`
    ## Appendix

    Any additional information goes here

`,
  },
  {
    name: "Usage/Examples",
    category: Category.Project,
    type: BlockType.Single,
    markdown: dedent`
    ## Usage/Examples

    \`\`\`javascript
    import Component from 'my-project'

    function App() {
      return <Component />
    }
    \`\`\`

`,
  },
  {
    name: "Used By",
    category: Category.Project,
    type: BlockType.Single,
    markdown: dedent`
    ## Used By

    This project is used by the following companies:

    - Company 1
    - Company 2

`,
  },
];
