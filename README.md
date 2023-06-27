# React Click Away Listener (rcal)

[![npm version](https://img.shields.io/npm/v/rcal.svg)](https://www.npmjs.com/package/@usmangurowa/rcal)

[![license](https://img.shields.io/npm/l/rcal.svg)](https://github.com/usmangurowa/rcal/blob/master/LICENSE)

A simple react click away listener component for React applications.

## Installation

Install the package using npm:

```shell
npm install @usmangurowa/rcal
```

Install the package using yarn:

```shell
yarn add @usmangurowa/rcal
```

## Usage

Here's a basic example of how to use `@usmangurowa/rcal`:

```jsx
import React from "react";
import ClickAwayListener from "@usmangurowa/rcal";

const App = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <ClickAwayListener as={"ul"} onClickAway={() => setOpen(false)}>
      {/* Your component  */}
    </ClickAwayListener>
  );
};

export default App;
```

## API

### ClickAwayListener

The `ClickAwayListener` component listen to click events outside of it.

**Props:**

- `as` (optional): element to render as ul, div, button, e.t.c.
- `onClickAway`: function to trigger when clicked outside is detected.
- `...props` : all other props like className, style, e.t.c.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.
