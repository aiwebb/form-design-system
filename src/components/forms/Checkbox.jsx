import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import CheckEmptyIcon from '../../../lib/icons/react/CheckEmptyIcon';
import CheckFilledIcon from '../../../lib/icons/react/CheckFilledIcon';
import CheckIndeterminateIcon from '../../../lib/icons/react/CheckIndeterminateIcon';

/**
 * @param {Object} props react props
 * @returns {ReactElement}
 */
const Checkbox = ({
  name,
  label,
  showLabel,
  value,
  onChange,
  indeterminate,
  checked,
  disabled,
  ...otherProps
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = () => {
    if (!disabled) {
      const updatedCheckedState = !isChecked;
      setIsChecked(updatedCheckedState);
      onChange(updatedCheckedState);
    }
  };

  let Icon = CheckEmptyIcon;
  if (indeterminate && isChecked) {
    Icon = CheckIndeterminateIcon;
  } else if (isChecked) {
    Icon = CheckFilledIcon;
  }

  return (
    <div
      className={cx('fdsCheckable fdsCheckbox', { 'fdsCheckable--disabled': disabled })}
    >
      <input
        ref={(el) => {
          /* eslint-disable-next-line no-unused-expressions,no-param-reassign */
          el && isChecked && (el.indeterminate = indeterminate);
        }}
        type="checkbox"
        name={name}
        id={name}
        value={value}
        className="media--xs"
        onChange={handleChange}
        checked={isChecked}
        disabled={disabled}
        {...otherProps}
      />
      <label className="flush--bottom" htmlFor={name}>
        <div role="checkbox" aria-checked={isChecked} aria-label={label}>
          <Icon size="xs" />
        </div>
        {showLabel && <span className="padding--left--half">{label}</span>}
      </label>
    </div>
  );
};

Checkbox.defaultProps = {
  value: undefined,
  checked: false,
  indeterminate: false,
  disabled: false,
  showLabel: true,
  onChange: () => {},
};

Checkbox.propTypes = {
  /**
   * `name` attribute of input element.
   * Also used for the `htmlFor` prop of the `label`.
   */
  name: PropTypes.string.isRequired,

  /** Label used for a11y attributes _and_ the rendered `label` element */
  label: PropTypes.string.isRequired,

  /** If the supplied `label` prop should be rendered to the screen. */
  showLabel: PropTypes.bool,

  /** optional accessibility label - will not render any text */
  a11yLabel: PropTypes.string,

  /** optional `value` attribute of input element */
  value: PropTypes.string,

  /** onChange callback - invoked with the checked state of the checkbox:
   * ```
   * <Checkbox onChange={(isChecked) => {}} ... />
   * ```
   */
  onChange: PropTypes.func,

  /** Sets type `indeterminate` to `true` */
  indeterminate: PropTypes.bool,

  /** Sets `checked` state (for both default and indeterminate types) */
  checked: PropTypes.bool,

  /** Disables form field when `true` */
  disabled: PropTypes.bool,
};

export default Checkbox;
