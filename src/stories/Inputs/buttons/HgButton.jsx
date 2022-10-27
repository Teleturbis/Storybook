import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import {
  TrashIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  ChevronDownIcon,
} from '@heroicons/react/outline';
import css from './hg-button.module.sass';

function HgButton({ label, func, state, icon, size, width, disabled }) {
  const [buttonState, setButtonState] = useState(css.button_normal);
  const [buttonIcon, setButtonIcon] = useState('');
  const [buttonSize, setSize] = useState(css.button_big);

  const [ButtonDisabled, setButtonDisabled] = useState(false);

  useEffect(() => {
    switchState();

    switch (disabled) {
      case true:
        setButtonDisabled(true);
        setButtonState(css.button_disabled);
        break;

      case false:
        setButtonDisabled(false);
        switchState();
        break;

      default:
        setButtonDisabled(false);
        break;
    }

    switch (icon) {
      case 'delete':
        setButtonIcon(
          <TrashIcon
            className={`${css.button__icon} ${css.button__icon_right}`}
          />
        );
        break;

      case 'left':
        setButtonIcon(
          <ChevronLeftIcon
            className={`${css.button__icon} ${css.button__icon_left}`}
          />
        );
        break;

      case 'right':
        setButtonIcon(
          <ChevronRightIcon
            className={`${css.button__icon} ${css.button__icon_right}`}
          />
        );
        break;

      case 'up':
        setButtonIcon(
          <ChevronUpIcon
            className={`${css.button__icon} ${css.button__icon_right}`}
          />
        );
        break;

      case 'down':
        setButtonIcon(
          <ChevronDownIcon
            className={`${css.button__icon} ${css.button__icon_right}`}
          />
        );
        break;

      default:
        setButtonIcon('');
        break;
    }

    switch (size) {
      case 'big':
        setSize(css.button_big);
        break;

      case 'small':
        setSize(css.button_small);
        break;

      default:
        setSize(css.button_big);
        break;
    }
  }, [state, icon, size, width, disabled]);

  function switchState() {
    switch (state) {
      case 'disabled':
        setButtonState(css.button_disabled);
        setButtonDisabled(true);
        break;

      case 'readOnly':
        setButtonState(css.button_read_only);
        setButtonDisabled(true);
        break;

      case 'outlined':
        setButtonState(css.button_outlined);
        break;

      case 'dark':
        setButtonState(css.button_dark);
        break;

      case 'link':
        // TODO: Style link state
        setButtonState(css.button_link);
        break;

      default:
        setButtonState(css.button_normal);
        break;
    }
  }

  return (
    <button
      onClick={func}
      disabled={ButtonDisabled}
      className={`${css.button} ${buttonState} ${buttonSize}`}
    >
      {label}
      {buttonIcon === '' ? null : buttonIcon}
    </button>
  );
}

HgButton.propTypes = {
  label: PropTypes.string,
  func: PropTypes.func,
  state: PropTypes.string,
};

export default HgButton;

// `hg-button ${buttonState} ${buttonSize} ${width ? width : 'hg-button--width'}`;
