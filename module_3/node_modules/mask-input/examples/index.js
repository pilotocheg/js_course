import PlainMaskInput from '../src/MaskInput';

const MaskInput = new PlainMaskInput(document.querySelector('.js-input'), {
  mask: '0000-0000-0000-0000',
});

const MaskInput2 = new PlainMaskInput(document.querySelector('.js-input-mask'), {
  mask: '0000-0000-0000-0000',
  alwaysShowMask: true,
  maskChar: '_',
});
