# React Native Dimensions API Returns Undefined on Android

This repository demonstrates a common issue in React Native where the `Dimensions` API returns `undefined` on Android before the layout is complete. This can lead to crashes or incorrect layout calculations.

The `DimensionsBug.js` file showcases the problematic code. The `DimensionsBugSolution.js` file provides a solution using `useEffect` to ensure the dimensions are accessed after the component has mounted and the layout is ready.

## Setup

1. Clone this repository
2. Run `npm install` or `yarn install`
3. Run the app on an Android emulator or device

## Problem
The problem is that the `Dimensions` API returns `undefined` before the layout is fully computed. When this value is used immediately for calculations it can lead to unexpected results or crashes.

## Solution
The solution involves checking for undefined dimensions and using `useEffect` hook to fetch the dimensions only after the component has mounted and the layout is ready. This ensures reliable values are used for layout calculations.