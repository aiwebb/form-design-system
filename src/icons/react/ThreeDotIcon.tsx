/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Thu Nov 11 2021 14:32:55 GMT-0600 (Central Standard Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const ThreeDotIcon = ({
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
			<path d="M12,8 C13.1,8 14,7.1 14,6 C14,4.9 13.1,4 12,4 C10.9,4 10,4.9 10,6 C10,7.1 10.9,8 12,8 Z M12,10 C10.9,10 10,10.9 10,12 C10,13.1 10.9,14 12,14 C13.1,14 14,13.1 14,12 C14,10.9 13.1,10 12,10 Z M12,16 C10.9,16 10,16.9 10,18 C10,19.1 10.9,20 12,20 C13.1,20 14,19.1 14,18 C14,16.9 13.1,16 12,16 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default ThreeDotIcon;

