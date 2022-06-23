/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Thu Jun 23 2022 10:17:41 GMT-0400 (Eastern Daylight Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const ActionsArrowRightIcon = ({
  size = 's',
  color,
  customSize,
}: IconProps): JSX.Element => (
  <div
    className={`fds-icon fds-icon--${size}`}
    style={{
      fill: color,
      width: customSize && `${customSize}px`,
      height: customSize && `${customSize}px`,
    }}
  >
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<g fillRule="evenodd">
		<g>
			<polygon points="8.90283401 5 7 6.645 13.1808367 12 7 17.355 8.90283401 19 17 12"/>
		</g>
	</g>
</svg>
  </div>
);

export default ActionsArrowRightIcon;

