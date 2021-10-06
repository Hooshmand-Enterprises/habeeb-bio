# My bio site

This is my online bio/resume app. It's built in Web Components using Lit.

Check it out live: [habeeb.bio](https://habeeb.bio).

## Setup

Install dependencies:

```bash
npm i
```

## Build

This sample uses the TypeScript compiler to produce JavaScript that runs in modern browsers.

To build the JavaScript version of your component:

```bash
npm run build
```

To watch files and rebuild when the files are modified, run the following command in a separate shell:

```bash
npm run build:watch
```

Both the TypeScript compiler and lit-analyzer are configured to be very strict. You may want to change `tsconfig.json` to make them less strict.

## Usage

You can totally customize the site by changing the `career.constant.js` in `src/app/shared/constants/`.  

If you use any part of this application please credit me :).

## Credits

The timeline borrows a lot from [this CodePen](https://codepen.io/ygc/pen/AXzVya), but I had to modify it so it works with the Shadow DOM & encapsulated styles.

