# React Lorem Ipsum

**React Lorem Ipsum** is a React Component that **generates placeholder text**.

When you develop a mockup page or backend API is not ready for data fetching and you have to make Frontend Development with static data until it comes, `react-lorem-ipsum` will create your gibberish texts for you.

Also, you can generate **random names, surnames, full names** and **usernames** to fill the fields about users randomly.

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

## How to import

```js
import LoremIpsum, { Name, Surname, FullName, Username } from 'react-lorem-ipsum';
```

## Props

#### LoremIpsum

| Name                     | Type   | Default | Description                                                                               |
| ------------------------ | ------ | ------- | ----------------------------------------------------------------------------------------- |
| pCount                   | number | 1       | Number of paragraphs created                                                              |
| avgWordsPerSentence      | number | 8       | Avarage number of words created for each sentence (standard deviation is fixed ±25%)      |
| avgSentencesPerParagraph | number | 8       | Avarage number of sentences created for each paragraph (standard deviation is fixed ±25%) |
| startWithLoremIpsum      | bool   | true    | Start with 'Lorem ipsum odor amet...' to first sentence of first paragraph                |

#### Name, FullName

| Name   | Type   | Default | Description                                                                                 |
| ------ | ------ | ------- | ------------------------------------------------------------------------------------------- |
| gender | string | 'all'   | Gender for the generated name or full name. Possible values are 'all', 'male' and 'female'. |

##### Surname, Username

Surname and Username does not take any props. They just create random surnames and usernames respectively.

## Example

#### LoremIpsum

**Code**

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

#### Name, Surname, FullName, Username

**Code**

```js
import React from 'react';
import { render } from 'react-dom';
import { FullName, Username } from 'react-lorem-ipsum';

render(
  <div className="user">
    <div className="full-name">
      <FullName gender="female" />
    </div>
    <div className="username">
      <Username />
    </div>
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
