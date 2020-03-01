![](https://res.cloudinary.com/toezy/image/upload/v1583065635/general-folder/76ae3c09-ba95-4612-8240-5ba9979adf7f_200x200_s2erz8.png)

# react-sangal

React ui components based on bootstrap 4

[![NPM](https://img.shields.io/npm/v/react-sangal.svg)](https://www.npmjs.com/package/react-sangal) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![Actions Status](https://github.com/emrecankoc/react-sangal/workflows/tests/badge.svg)](https://github.com/emrecankoc/react-sangal/actions)

## Install

```bash
npm install --save bootstrap
npm install --save react-sangal

# or with yarn

yarn add bootstrap
yarn add react-sangal
```

## Usage

Example usages under example folder

```tsx
import * as React from "react";

import SangalTa from "react-sangal";

import "bootstrap/dist/css/bootstrap.min.css";

class Example extends React.Component {
  render() {
    const pager = {
      currentPage: this.state.currentPage,
      lastPage: this.state.lastPage,
      onPageChangeEvent: this.onPageChange
    };
    const header = {
      clmnSelection: { text: "Selection", type: "checkbox", editable: true },
      clmnName: { text: "Name", type: "text", editable: false },
      clmnSurname: { text: "Surname", type: "text", editable: true }
    };
    const rows = [
      { clmnSelection: "1", clmnName: "John", clmnSurname: "Doe" },
      { clmnSelection: "0", clmnName: "Adam", clmnSurname: "Jackson" },
      { clmnSelection: "0", clmnName: "Garry", clmnSurname: "Smith" }
    ];
    return <SangalTable pager={pager} header={header} rows={rows} />;
  }
}
```

## License

MIT © [emrecankoc](https://github.com/emrecankoc)

PS: Project template based on [create-react-library](https://github.com/transitive-bullshit/create-react-library)
