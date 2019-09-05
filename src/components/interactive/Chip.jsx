import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import DenyIcon from '../../../lib/icons/react/DenyIcon';
import baseElement from '../../util/baseElement';

const Chip = ({ size, Link, theme, isActive, label, subtitle, onClose, ...rest }) => {
  const Element = baseElement({ href: rest.href, as: Link });

  const rootClass = cx('fdsChip', {
    'fdsChip--active': isActive,
    'fdsChip--small': size === 'sm',
    'fdsChip--large': size === 'lg',
    'fdsChip--blue': theme === 'blue',
    'fdsChip--outline': theme === 'outline',
  });
  return (
    <Element {...rest} className={rootClass}>
      <span>
        {label}
        {subtitle && <span className="fdsChip-subtitle">{subtitle}</span>}
      </span>
      {onClose && (
        <span
          role="button"
          tabIndex="-1"
          className="fdsChip-close"
          onClick={(e) => {
            onClose();
            e.stopPropagation();
          }}
        >
          <DenyIcon size="xs" />
        </span>
      )}
    </Element>
  );
};

Chip.propTypes = {
  label: PropTypes.string.isRequired,
  /**
   * Pass **only** react-router `Link` here. You may **not**
   * pass anything else here: SFC, Class Component, etc (even
   * if they use react-router `Link` underneath the hood).
   */
  Link: PropTypes.func,
  isActive: PropTypes.bool,
  subtitle: PropTypes.string,
  /**
   * By passing this onClick handler, the close icon
   * will automatically appear
   */
  onClose: PropTypes.func,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  theme: PropTypes.oneOf(['blue', 'gray', 'outline']),
};

Chip.defaultProps = {
  theme: 'gray',
  size: 'md',
};

export default Chip;
