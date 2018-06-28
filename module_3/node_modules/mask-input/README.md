# Vanilla mask-input component.

This component helps you create any formatted inputs such as phone number, credit card or birth date.
This component assume, that you won't use react on project. If you use react, see [react-maskinput](https://github.com/xnimorz/masked-input#react-maskinput) or [react-numberinput](https://github.com/xnimorz/masked-input#react-numberinput) — react masked input components.

Watch demo: http://xnimorz.github.io/vanilla-masked-input/

# Other components

* [react-maskinput](https://github.com/xnimorz/masked-input#react-maskinput) — react masked input,
* [react-numberinput](https://github.com/xnimorz/masked-input#react-numberinput) — react numeric input,
* [input-core](https://github.com/xnimorz/masked-input#input-core) — the core module on top of which you can build any custom components,

## Supports

Tested:

* IOS Safari 11
* Google Chrome
* Safari
* Mozilla Firefox

Not Tested:

* IE, EDGE, Mobile IE
* Android Browser
* Mobile Chrome

### Installation

```
npm install --save mask-input
```

or

```
yarn add mask-input
```

### Usage

Mask input receive in constructor props:

```javascript
import MaskInput from 'mask-input';

const maskInput = new MaskInput(document.querySelector('.js-input-selector'), {
  mask: '0000-0000-0000-0000',
  alwaysShowMask: true,
  maskChar: '_',
});
```

### How to change params in runtime

To change props you can use setProps method:

```javascript
this.maskInput.setProps({ mask: '0000-0000' });
```

VanilaJs maskInput support all props, that support react-maskinput: https://github.com/xnimorz/masked-input/tree/master/react-maskinput

# Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request

# Changelog

1.0.1 Move vanilla mask input to separate repository, use prettier to unify formatting

1.0.0 several changes:

* From this moment all of tools will have similar version
* Added examples using components with another libs, such as `styled-components`
* Improved demo page
* Improved readme

  0.1.4 use input-core@0.1.2

  0.1.3 Add e.which to input event callback to support iOS@9.4

  0.1.2 Add android support, remove transform-react-jsx from mask-input build

  0.1.1 Fix bug with removing static symbol

  0.1.0 First publish

# License

MIT
