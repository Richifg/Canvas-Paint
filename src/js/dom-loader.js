// these html elements are constantly used by the managers
// setup queries other elements  but those are used once

export const drawingArea = document.getElementById('drawing-area');

export const toolInputs = [...document.querySelectorAll('input[name=tool]')];

export const widthInputs = [...document.querySelectorAll('input[name=width]')];

export const activeColorInputs = [...document.querySelectorAll('input[name=color]')];

export const colorPickerInput = document.querySelector('input[type=color]');

export const customColorDisplays = [...document.querySelectorAll('.color-custom')];

export const cursorCoordinatesDisplay = document.getElementById('cursor-coordinates');

export const canvasSizeDisplay = document.getElementById('canvas-size');