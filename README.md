# React Lorem Ipsum | Placeholder Text Generator for React

**React Lorem Ipsum** is a React Component that creates Lorem Ipsum text for using as placeholder in your applications.

[![NPM version][npm-image]][npm-url]
[![npm download][download-image]][download-url]

[npm-image]: http://img.shields.io/npm/v/react-lorem-ipsum.svg?style=flat-square
[npm-url]: http://npmjs.org/package/react-lorem-ipsum
[download-image]: https://img.shields.io/npm/dm/react-lorem-ipsum.svg?style=flat-square
[download-url]: https://npmjs.org/package/react-lorem-ipsum

## Install

```bash
npm install --save react-lorem-ipsum
```

## Demo

[https://npmjs.org/package/react-lorem-ipsum](https://npmjs.org/package/react-lorem-ipsum)

## Props

| Name                     | Type   | Default | Description                                                                               |
| ------------------------ | ------ | ------- | ----------------------------------------------------------------------------------------- |
| pCount                   | number | 1       | Number of paragraphs created                                                              |
| avgWordsPerSentence      | number | 8       | Avarage number of words created for each sentence (standard deviation is fixed ±20%)      |
| avgSentencesPerParagraph | number | 8       | Avarage number of sentences created for each paragraph (standard deviation is fixed ±20%) |
| startWithLoremIpsum      | bool   | true    | Start with 'Lorem ipsum odor amet...' to first sentence of first paragraph                |

## Example

**React Code**

```js
import React from 'react';
import { render } from 'react-dom';
import LoremIpsum from 'react-lorem-ipsum';

render(
  <div className="wrapper">
    <LoremIpsum pCount={2} />
  </div>,
  document.getElementById('root'),
);
```

**HTML Output**

```html
<div class="wrapper">
  <p>
    Lorem ipsum odor amet, interdum ultricies scelerisque. Fusce gravida tellus condimentum
    penatibus gravida senectus ligula maximus. Laoreet ad bibendum vel facilisis lacinia sem
    nascetur. Congue nec egestas netus faucibus convallis conubia. Nam potenti porttitor dignissim
    blandit mus integer velit class. Luctus sed suscipit luctus pellentesque massa ultrices senectus
    erat. Convallis finibus congue placerat vel donec. Dui eros commodo arcu lobortis ad mattis
    hendrerit habitasse. Cubilia facilisis ultricies habitasse volutpat mattis eros suscipit
    adipiscing. Pulvinar ligula etiam magna enim netus eleifend.
  </p>
  <p>
    Mattis libero porta bibendum sed dapibus mattis sociosqu a sapien. Etiam cras ante venenatis
    fames et nunc cursus facilisis ultricies. Turpis fames felis justo rhoncus donec fermentum.
    Donec libero ornare auctor mollis vel odio duis. Posuere rhoncus fringilla proin egestas diam
    primis. Porta suspendisse lorem ridiculus dapibus inceptos quam euismod risus. Proin nec sed
    cras mattis dolor eros blandit.
  </p>
</div>
```

## License

`react-lorem-ipsum` is released under the MIT license.
