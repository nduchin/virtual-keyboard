const keyMap = [
  [
    { keyCode: 'Backquote', keyType: 'char', keyVal: [[96, 126], [91, 1]] },
    { keyCode: 'Digit1', keyType: 'sub', keyVal: [[49, 33], [91, 1]] },
    { keyCode: 'Digit2', keyType: 'sub', keyVal: [[50, 64], [91, 1]] },
    { keyCode: 'Digit3', keyType: 'sub', keyVal: [[51, 35], [91, 1]] },
    { keyCode: 'Digit4', keyType: 'sub', keyVal: [[52, 36], [91, 1]] },
    { keyCode: 'Digit5', keyType: 'sub', keyVal: [[53, 37], [91, 1]] },
    { keyCode: 'Digit6', keyType: 'sub', keyVal: [[54, 94], [91, 1]] },
    { keyCode: 'Digit7', keyType: 'sub', keyVal: [[55, 38], [91, 1]] },
    { keyCode: 'Digit8', keyType: 'sub', keyVal: [[56, 42], [91, 1]] },
    { keyCode: 'Digit9', keyType: 'sub', keyVal: [[57, 40], [91, 1]] },
    { keyCode: 'Digit0', keyType: 'sub', keyVal: [[48, 41], [91, 1]] },
    { keyCode: 'Minus', keyType: 'sub', keyVal: [[45, 95], [91, 1]] },
    { keyCode: 'Equal', keyType: 'sub', keyVal: [[61, 43], [91, 1]] },
    {
      keyCode: 'Backspace', keyType: 'spec', keyVal: ['Backspace'], options: ['stretch'],
    },
  ],
  [
    {
      keyCode: 'Tab', keyType: 'spec', keyVal: ['Tab'], options: ['stretch'],
    },
    { keyCode: 'KeyQ', keyType: 'char', keyVal: [[113, 81], [91, 1]] },
    { keyCode: 'KeyW', keyType: 'char', keyVal: [[119, 87], [91, 1]] },
    { keyCode: 'KeyE', keyType: 'char', keyVal: [[101, 69], [91, 1]] },
    { keyCode: 'KeyR', keyType: 'char', keyVal: [[114, 82], [91, 1]] },
    { keyCode: 'KeyT', keyType: 'char', keyVal: [[116, 84], [91, 1]] },
    { keyCode: 'KeyY', keyType: 'char', keyVal: [[121, 89], [91, 1]] },
    { keyCode: 'KeyU', keyType: 'char', keyVal: [[117, 85], [91, 1]] },
    { keyCode: 'KeyI', keyType: 'char', keyVal: [[105, 73], [91, 1]] },
    { keyCode: 'KeyO', keyType: 'char', keyVal: [[111, 79], [91, 1]] },
    { keyCode: 'KeyP', keyType: 'char', keyVal: [[112, 80], [91, 1]] },
    { keyCode: 'BracketLeft', keyType: 'char', keyVal: [[91, 123], [91, 1]] },
    { keyCode: 'BracketRight', keyType: 'char', keyVal: [[93, 125], [91, 1]] },
    { keyCode: 'Backslash', keyType: 'sub', keyVal: [[92, 124], [91, 1]] },
    { keyCode: 'Delete', keyType: 'spec', keyVal: ['Del'] },
  ],
  [
    {
      keyCode: 'CapsLock', keyType: 'spec', keyVal: ['CapsLock'], options: ['stretch'],
    },
    { keyCode: 'KeyA', keyType: 'char', keyVal: [[97, 65], [91, 1]] },
    { keyCode: 'KeyS', keyType: 'char', keyVal: [[115, 83], [91, 1]] },
    { keyCode: 'KeyD', keyType: 'char', keyVal: [[100, 68], [91, 1]] },
    { keyCode: 'KeyF', keyType: 'char', keyVal: [[102, 70], [91, 1]] },
    { keyCode: 'KeyG', keyType: 'char', keyVal: [[103, 71], [91, 1]] },
    { keyCode: 'KeyH', keyType: 'char', keyVal: [[104, 72], [91, 1]] },
    { keyCode: 'KeyJ', keyType: 'char', keyVal: [[106, 74], [91, 1]] },
    { keyCode: 'KeyK', keyType: 'char', keyVal: [[107, 75], [91, 1]] },
    { keyCode: 'KeyL', keyType: 'char', keyVal: [[108, 76], [91, 1]] },
    { keyCode: 'Semicolon', keyType: 'char', keyVal: [[59, 58], [91, 1]] },
    { keyCode: 'Quote', keyType: 'char', keyVal: [[39, 34], [91, 1]] },
    {
      keyCode: 'Enter', keyType: 'spec', keyVal: ['Enter'], options: ['stretch'],
    },
  ],
  [
    {
      keyCode: 'ShiftLeft', keyType: 'spec', keyVal: ['Shift'], options: ['stretch'],
    },
    { keyCode: 'KeyZ', keyType: 'char', keyVal: [[122, 90], [91, 1]] },
    { keyCode: 'KeyX', keyType: 'char', keyVal: [[120, 88], [91, 1]] },
    { keyCode: 'KeyC', keyType: 'char', keyVal: [[99, 67], [91, 1]] },
    { keyCode: 'KeyV', keyType: 'char', keyVal: [[118, 86], [91, 1]] },
    { keyCode: 'KeyB', keyType: 'char', keyVal: [[98, 66], [91, 1]] },
    { keyCode: 'KeyN', keyType: 'char', keyVal: [[110, 78], [91, 1]] },
    { keyCode: 'KeyM', keyType: 'char', keyVal: [[109, 77], [91, 1]] },
    { keyCode: 'Comma', keyType: 'char', keyVal: [[44, 60], [91, 1]] },
    { keyCode: 'Period', keyType: 'char', keyVal: [[46, 62], [91, 1]] },
    { keyCode: 'ArrowUp', keyType: 'spec', keyVal: ['↑'] },
    {
      keyCode: 'ShiftRight', keyType: 'spec', keyVal: ['Shift'], options: ['stretch'],
    },
  ],
  [
    { keyCode: 'ControlLeft', keyType: 'spec', keyVal: ['Ctrl'] },
    { keyCode: 'MetaLeft', keyType: 'spec', keyVal: ['Win'] },
    { keyCode: 'AltLeft', keyType: 'spec', keyVal: ['Alt'] },
    {
      keyCode: 'Space', keyType: 'spec', keyVal: [''], options: ['stretch'],
    },
    { keyCode: 'AltRight', keyType: 'spec', keyVal: ['Alt'] },
    { keyCode: 'ArrowLeft', keyType: 'spec', keyVal: ['←'] },
    { keyCode: 'ArrowDown', keyType: 'spec', keyVal: ['↓'] },
    { keyCode: 'ArrowRight', keyType: 'spec', keyVal: ['→'] },
    { keyCode: 'ControlRight', keyType: 'spec', keyVal: ['Ctrl'] },
  ],
];

export default keyMap;
