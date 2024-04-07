# Overlay
Minimal Overlay/Backdrop React Component

![npm bundle size](https://img.shields.io/bundlephobia/min/@j4jinxx/overlay)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/@j4jinxx/overlay)
![npm download](https://img.shields.io/npm/dm/@j4jinxx/overlay.svg) 

## Install
    npm i @j4jinxx/overlay

## Import
    import Overlay from '@j4jinxx/overlay';


## Props
|   Name   |  Type  |   Default       | Description |
|----------|:-------|:----------------|:--------|
| opened   | bool   | false           | If true, the overlay is open |
| color    | string | #e0e0e0         | Overlay Color |
| onClose  | func   | ( ) => { }      | Callback fired when the component requests to be closed |