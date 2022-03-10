import { Category, Block, BlockType, Options } from '~/types'
import dedent from 'ts-dedent'

const githubReadmeStatBaseURl = 'https://github-readme-stats.vercel.app/api?'
const githubReadmeStatURl =
  githubReadmeStatBaseURl +
  'username={{user}}&show_icons={{show_icons}}&theme={{theme}}&title_color={{title_color}}&text_color={{text_color}}&bg_color={{bg_color}}&hide_border={{hide_border}}'

const githubReadmetopLangsBaseURl = 'https://github-readme-stats.vercel.app/api/top-langs?'

const githubReadmetopLangsURL =
  githubReadmetopLangsBaseURl +
  'username={{user}}&theme={{theme}}&title_color={{title_color}}&text_color={{text_color}}&bg_color={{bg_color}}&hide_border={{hide_border}}&layout={{layout}}'

export const SingleProfileBlockList: Block[] = [
  {
    name: 'Github Profile - Introduction',
    category: Category.GithubProfile,
    type: BlockType.Single,
    markdown: dedent`
    # Hi, I'm john Doe! 👋

`,
  },
  {
    name: 'Github Profile - About Me',
    category: Category.GithubProfile,
    type: BlockType.Single,
    markdown: dedent`
    ## 🚀 About Me

    I'm a full stack developer...

`,
  },
  {
    name: 'Github Profile - Other',
    category: Category.GithubProfile,
    type: BlockType.Single,
    markdown: dedent`    
    - 👩‍💻 I'm currently working on...
    
    - 🧠 I'm currently learning...
    
    - 👯‍♀️ I'm looking to collaborate on...
    
    - 🤔 I'm looking for help with...

    - 📝 I regularly write articles on
    
    - 💬 Ask me about...
    
    - 📫 How to reach me...

    -- 📄 Know about my experiences
    
    - 😄 Pronouns...
    
    - ⚡️ Fun fact...

`,
  },
  {
    name: 'Github Profile - Trophy Card',
    category: Category.GithubProfile,
    type: BlockType.Single,
    isDisabled: true,
    options: [
      {
        value: 'g3root',
        type: Options.Text,
        name: 'user',
        label: 'User Name',
        textType: 'text',
      },
    ],
    markdown: dedent`    
    <p align="left">
    <a href="https://github.com/ryo-ma/github-profile-trophy">
    <img src="https://github-profile-trophy.vercel.app/?username={user}" alt="{user}" />
    </a>
    </p>

`,
  },
  {
    name: 'Github Profile - Stats Card',
    category: Category.GithubProfile,
    type: BlockType.Single,
    isDisabled: true,
    options: [
      {
        value: 'g3root',
        type: Options.Text,
        name: 'user',
        label: 'Github User Name',
        textType: 'text',
      },
      {
        value: 'default',
        type: Options.Select,
        name: 'theme',
        label: 'Theme',
        options: [
          'default',
          'dark',
          'radical',
          'merko',
          'gruvbox',
          'tokyonight',
          'onedark',
          'cobalt',
          'nightowl',
          'github_dark',
          'synthwave',
          'highcontrast',
          'dracula',
        ],
      },
      {
        value: '#000000',
        type: Options.Text,
        name: 'title_color',
        label: 'Title color',
        textType: 'color',
      },
      {
        value: true,
        type: Options.CheckBox,
        name: 'show_icons',
        label: 'Show Icons',
      },
      {
        value: true,
        type: Options.CheckBox,
        name: 'hide_border',
        label: 'Hide Border',
      },
      {
        value: '#000000',
        type: Options.Text,
        name: 'text_color',
        label: 'Text color',
        textType: 'color',
      },
      {
        value: '#ffffff',
        type: Options.Text,
        name: 'bg_color',
        label: 'Background color',
        textType: 'color',
      },
    ],
    markdown: dedent`
    <p>&nbsp;
    <img align="center" src="${githubReadmeStatURl}" alt="{{user}} stats card" /></p>

`,
  },
  {
    name: 'Github Profile - Top Langs Card',
    category: Category.GithubProfile,
    type: BlockType.Single,
    isDisabled: true,
    options: [
      {
        value: 'g3root',
        type: Options.Text,
        name: 'user',
        label: 'Github User Name',
        textType: 'text',
      },
      {
        value: 'default',
        type: Options.Select,
        name: 'theme',
        label: 'Theme',
        options: [
          'default',
          'dark',
          'radical',
          'merko',
          'gruvbox',
          'tokyonight',
          'onedark',
          'cobalt',
          'nightowl',
          'github_dark',
          'synthwave',
          'highcontrast',
          'dracula',
        ],
      },
      {
        value: 'compact',
        type: Options.Select,
        name: 'layout',
        label: 'Layout',
        options: ['default', 'compact'],
      },
      {
        value: '#000000',
        type: Options.Text,
        name: 'title_color',
        label: 'Title color',
        textType: 'color',
      },
      {
        value: true,
        type: Options.CheckBox,
        name: 'hide_border',
        label: 'Hide Border',
      },
      {
        value: '#000000',
        type: Options.Text,
        name: 'text_color',
        label: 'Text color',
        textType: 'color',
      },
      {
        value: '#ffffff',
        type: Options.Text,
        name: 'bg_color',
        label: 'Background color',
        textType: 'color',
      },
    ],
    markdown: dedent`
    <p>
    <img align="center" src="${githubReadmetopLangsURL}" alt="{{user}} stats card" /></p>

`,
  },
]
