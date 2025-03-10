/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Thu Aug 11 2022 10:23:19 GMT-0500 (Central Daylight Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const ArchiveIcon = ({
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
			<path d="M5.67484761,3 C5.31509654,3.00019005 4.98248461,3.18905805 4.801186,3.4960938 L3.0360731,6.4863281 L3.03014334,6.4960938 L0,11.486328 L1.7354637,12.513672 L2.89178059,10.609375 L2.89178059,19 C2.89178059,20.093063 3.80962314,21 4.91582933,21 L19.0841705,21 C20.1903769,21 21.1082193,20.093063 21.1082193,19 L21.1082193,10.609375 L22.2645361,12.513672 L24,11.486328 L20.9836927,6.5214844 C20.9792043,6.5129556 20.9745917,6.50449119 20.9698563,6.4960938 L19.1988137,3.4960938 C19.0175151,3.18905811 18.6849033,3.00019012 18.3251523,3 L5.67484761,3 Z M6.25597103,5 L17.7440286,5 L18.9240653,7 L5.07593472,7 L6.25597103,5 Z M4.91582933,9 L19.0841705,9 L19.0841705,19 L4.91582933,19 L4.91582933,9 Z M8.96392682,11 L8.96392682,13 L15.0360731,13 L15.0360731,11 L8.96392682,11 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default ArchiveIcon;

