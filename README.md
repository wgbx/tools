<h1 align="center">@wgbx/tools</h1>
<p align="center">Business Library Tool</p>

[简体中文](./README.ZH.md)

## Installation

```bash
npm install @wgbx/tools -S
// or
pnpm add @wgbx/tools -S
```

### What is @wgbx/tools?

@wgbx/tools is a concise and powerful modern JavaScript utility library.

## Motivation

During the development of our business, we always have to use certain methods to improve our efficiency. As the ecosystem becomes more and more complete and the number of projects increases, we encounter situations where business methods are repeatedly used in different projects, resulting in code redundancy and increased maintenance costs.

There are some basic business methods that should be provided in projects to avoid urgent development when needed. However, our methods are often not rigorously unit-tested, which can also lead to some bugs.

Moreover, with the ESM specification being supported by more and more modern browsers, we are eager to have a lightweight library that is suitable for modern browsers and allows us to call functions or tools according to specific business needs just like looking up words in a dictionary.

Therefore, we initiated @wgbx/tools, which can provide front-end developers with a basic and comprehensive business tool library.

## Features

We have done several things to make it more advanced.

### Easy-to-understand Documentation

Built based on the latest VitePress, it is faster and more covenient.
Faster hot updates.

### Lighter and More Extensible

Packaged using Rollup.
Dynamic plugins, you can mount your favorite plugins within one minute.
On-demand loading is available.

### Based on TypeScript

Applicable to more scenarios.
Includes basic libraries with redundant functions and deprecated APIs removed.
Comes with detailed annotations (func/desc/returns/example...).

### Unit Testing

The methods are unit-tested to ensure the function stability.

## How is it Different from lodash?

**Function Scope**
lodash is a tool function library that does not participate in business operations. @wgbx/tools, on the other hand, is a business library that can participate in business and provides business-level tools.

**Customizability**
lodash offers many tool functions but cannot be customized. @wgbx/tools provides many tool functions and supports dynamic expansion. You can add your own tool functions according to your requirements.
