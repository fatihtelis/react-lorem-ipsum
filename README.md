# React Lorem Ipsum

**React Lorem Ipsum** is a React library including Components and Functions to **generate placeholder text**.

When you develop a mockup page or backend API is not ready for data fetching and you have to make Frontend Development with static data until it comes, `react-lorem-ipsum` will create your gibberish texts for you.

In addition to Lorem Ipsum text, you can generate **random names, surnames, full names** and **usernames** to fill the fields about users randomly.

👍 React Lorem Ipsum is a zero-dependency, lightweight, easy-to-use package.

[![NPM version][npm-image]][npm-url]
[![npm download][download-image]][download-url]
[![npm size][size-image]][size-url]

[npm-image]: https://img.shields.io/npm/v/react-lorem-ipsum.svg?style=flat-square
[npm-url]: https://npmjs.org/package/react-lorem-ipsum
[download-image]: https://img.shields.io/npm/dm/react-lorem-ipsum.svg?style=flat-square
[download-url]: https://npmjs.org/package/react-lorem-ipsum
[size-image]: https://img.shields.io/bundlephobia/min/react-lorem-ipsum.svg
[size-url]: https://npmjs.org/package/react-lorem-ipsum

**Table of Contents**
1- [Install](#install)
2- [Demo](#demo)
3- [How to Import](#how-to-import)
4- [Props](#props)
5- [Examples](#examples)
6- [License](#license)

## Install

```bash
npm install react-lorem-ipsum
```

or

```bash
yarn add react-lorem-ipsum
```

## Demo

[https://fatihtelis.github.io/react-lorem-ipsum](https://fatihtelis.github.io/react-lorem-ipsum)

## How to Import

#### Component

```js
import { LoremIpsum } from 'react-lorem-ipsum';
```

#### Functions

```js
import { loremIpsum, name, surname, fullname, username } from 'react-lorem-ipsum';
```

## Props

#### LoremIpsum (Component), loremIpsum (function)

**loremIpsum** is function version of the component **LoremIpsum** which generates plain text instead of HTML. They both get the same props/inputs.

| Name                     | Type   | Default | Description                                                                               |
| ------------------------ | ------ | ------- | ----------------------------------------------------------------------------------------- |
| p                        | number | 1       | Number of paragraphs that will be generated                                               |
| avgWordsPerSentence      | number | 8       | Avarage number of words created for each sentence (standard deviation is fixed ±25%)      |
| avgSentencesPerParagraph | number | 8       | Avarage number of sentences created for each paragraph (standard deviation is fixed ±25%) |
| startWithLoremIpsum      | bool   | true    | Start with 'Lorem ipsum odor amet...' to first sentence of first paragraph                |

Usage of _LoremIpsum vs. loremIpsum_ is as follows;

**LoremIpsum**

```js
// Component that generates HTML
import { LoremIpsum } from 'react-lorem-ipsum';

...
<div className="wrapper">
  <LoremIpsum p={2} />
</div>,
```

**loremIpsum**

```js
// Function that generates plain text (string)
import { loremIpsum } from 'react-lorem-ipsum';

...
<div className="wrapper">
  {loremIpsum({p: 2})}
</div>,
```

_Note:_ If you use loremIpsum function to generate plain text, paragraphs will be seperated with "\n" if paragraph count is greater than 1. You have to process it somehow by replacing new lines or splitting from new lines before using as HTML. There is an example about how to split plain text in the "Examples" section.

Example:

```js
// Convert lorem ipsum text string to an array by splitting from new lines.
const textArr = loremIpsum({ p: 5 }).split(/\n/);

...

<div className="text-wrapper">
  {textArr.map(text => (
    <>
      {text}
      <br /><br />
    </>
  ))}
</div>
```

#### name, fullname

| Name   | Type   | Default | Description                                                                                             |
| ------ | ------ | ------- | ------------------------------------------------------------------------------------------------------- |
| gender | string | 'all'   | Gender for the generated name or full name. Possible values are **'all'**, **'male'** and **'female'**. |

Use "gender" props like name('male'), fullname('female') etc.

#### surname, username

| Props                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------- |
| `surname` and `username` functions **does not take any inputs**. They just create random surnames and usernames respectively. |

## Examples

### LoremIpsum (Component)

**Code**

```js
import React from 'react';
import { render } from 'react-dom';
import { LoremIpsum } from 'react-lorem-ipsum';

render(
  <div className="text-wrapper">
    <LoremIpsum p={2} />
  </div>,
  document.getElementById('root'),
);
```

**HTML Output**

```html
<div class="text-wrapper">
  <p>
    Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
    dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
    Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
    sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue. Justo molestie tellus
    adipiscing sed himenaeos primis amet quam. Rutrum magna luctus urna suspendisse bibendum elit.
  </p>
  <p>
    Non etiam tempor id arcu magna ante eget. Nec per posuere cubilia cras porttitor condimentum
    orci suscipit. Leo maecenas in tristique, himenaeos elementum placerat. Taciti rutrum nostra,
    eget cursus velit ultricies. Quam molestie tellus himenaeos cubilia congue vivamus ultricies.
    Interdum praesent ut penatibus fames eros ad consectetur sed. Posuere vehicula id integer fusce
    cursus nulla ipsum.
  </p>
</div>
```

### loremIpsum (Function)

**Code 1**

```js
import React from 'react';
import { render } from 'react-dom';
import { loremIpsum } from 'react-lorem-ipsum';

render(<div className="text-wrapper">{loremIpsum()}</div>, document.getElementById('root'));
```

**HTML Output 1**

```html
<div class="text-wrapper">
  Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
  dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
  Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit sodales
  taciti duis praesent id. Consequat urna vitae morbi nunc congue. Justo molestie tellus adipiscing
  sed himenaeos primis amet quam. Rutrum magna luctus urna suspendisse bibendum elit.
</div>
```

**Code 2**

```js
import React from 'react';
import { render } from 'react-dom';
import { loremIpsum } from 'react-lorem-ipsum';

// Convert lorem ipsum text string to an array by splitting from new lines.
const textArr = loremIpsum({ p: 5 }).split(/\n/);

render(
  <div className="text-wrapper">
    {textArr.map(text => (
      <>
        {text}
        <br />
        <br />
      </>
    ))}
  </div>,
  document.getElementById('root'),
);
```

**HTML Output 2**

```html
<div class="text-wrapper">
  Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
  dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
  Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit sodales
  taciti duis praesent id. Consequat urna vitae morbi nunc congue. Justo molestie tellus adipiscing
  sed himenaeos primis amet quam. Rutrum magna luctus urna suspendisse bibendum elit.
  <br /><br />
  Non etiam tempor id arcu magna ante eget. Nec per posuere cubilia cras porttitor condimentum orci
  suscipit. Leo maecenas in tristique, himenaeos elementum placerat. Taciti rutrum nostra, eget
  cursus velit ultricies. Quam molestie tellus himenaeos cubilia congue vivamus ultricies. Interdum
  praesent ut penatibus fames eros ad consectetur sed. Posuere vehicula id integer fusce cursus
  nulla ipsum.
</div>
```

### name, surname, fullname, username

**Code**

```js
import React from 'react';
import { render } from 'react-dom';
import { fullName, username } from 'react-lorem-ipsum';

render(
  <div className="user">
    <div className="full-name">{fullname('female')}</div>
    <div className="username">{username()}</div>
  </div>,
  document.getElementById('root'),
);
```

**HTML Output**

```html
<div class="user">
  <div class="full-name">Jennifer S. Rose</div>
  <div class="username">smart.panda.19</div>
</div>
```

## License

`react-lorem-ipsum` is released under the MIT license.
