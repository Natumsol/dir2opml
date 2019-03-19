# dir2opml
对某一文件目录，快速生成其目录结构`tree.txt`，同时提供大纲文件 `tree.opml`，方便导入脑图工具，比如`mindNode`。

## 快速开始

1. **安装**

    `npm i -g dir2opml`

2. **使用**

    ![](https://img.alicdn.com/tfs/TB1LCwpMHvpK1RjSZPiXXbmwXXa-1276-208.png)

3. 效果图
    - 文本结构
        ```
        ├── .justconf
        │   ├── README.txt
        │   └── state.json
        ├── build
        │   ├── bike.css
        │   ├── bike.js
        │   ├── chair.css
        │   ├── chair.js
        │   ├── code.css
        │   ├── code.js
        │   ├── elect.css
        │   ├── elect.js
        │   ├── market.css
        │   ├── market.js
        │   ├── page1.css
        │   ├── page1.js
        │   ├── page2.css
        │   ├── page2.js
        │   ├── page3.css
        │   ├── page3.js
        │   ├── page4.js
        │   ├── page5.css
        │   ├── page5.js
        │   ├── super.css
        │   └── super.js
        ├── common
        │   └── index.scss
        ├── demo
        │   └── index.html
        ├── docs
        │   └── index.html
        ├── page
        │   ├── bike
        │   │   ├── components
        │   │   ├── modules
        │   │   ├── config.json
        │   │   ├── index.jsx
        │   │   └── index.scss
        │   ├── chair
        │   │   ├── components
        │   │   ├── modules
        │   │   ├── config.json
        │   │   ├── index.jsx
        │   │   └── index.scss
        │   ├── code
        │   │   ├── components
        │   │   ├── modules
        │   │   ├── config.json
        │   │   ├── index.jsx
        │   │   └── index.scss
        │   ├── elect
        │   │   ├── components
        │   │   ├── modules
        │   │   ├── config.json
        │   │   ├── index.jsx
        │   │   └── index.scss
        │   ├── market
        │   │   ├── components
        │   │   ├── modules
        │   │   ├── config.json
        │   │   ├── index.jsx
        │   │   └── index.scss
        │   ├── page1
        │   │   ├── components
        │   │   ├── modules
        │   │   ├── index.jsx
        │   │   └── index.scss
        │   ├── page2
        │   │   ├── table-basic
        │   │   └── index.jsx
        │   ├── page3
        │   │   ├── module1
        │   │   ├── module2
        │   │   └── index.jsx
        │   ├── page4
        │   │   ├── form-basic
        │   │   └── index.jsx
        │   ├── page5
        │   │   ├── components
        │   │   ├── modules
        │   │   ├── config.json
        │   │   ├── index.jsx
        │   │   └── index.scss
        │   └── super
        │       ├── components
        │       ├── modules
        │       ├── config.json
        │       ├── index.jsx
        │       └── index.scss
        ├── .editorconfig
        ├── .eslintignore
        ├── .eslintrc
        ├── .gitattributes
        ├── .gitignore
        ├── README.md
        ├── package.json
        └── webpack.config.js
        ```

    - 导入生成的脑图
        ![](https://img.alicdn.com/tfs/TB15yQlMSrqK1RjSZK9XXXyypXa-996-6074.png)