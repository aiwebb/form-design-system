/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Thu Aug 11 2022 10:23:19 GMT-0500 (Central Daylight Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const HeartIcon = ({
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
			<path d="M16.5,3 C14.76,3 13.09,3.81 12,5.09 C10.91,3.81 9.24,3 7.5,3 C4.42,3 2,5.42 2,8.5 C2,12.28 5.4,15.36 10.55,20.04 L12,21.35 L13.45,20.03 C18.6,15.36 22,12.28 22,8.5 C22,5.42 19.58,3 16.5,3 Z M12.1,18.55 L12,18.65 L11.9,18.55 C7.14,14.24 4,11.39 4,8.5 C4,6.5 5.5,5 7.5,5 C9.04,5 10.54,5.99 11.07,7.36 L12.94,7.36 C13.46,5.99 14.96,5 16.5,5 C18.5,5 20,6.5 20,8.5 C20,11.39 16.86,14.24 12.1,18.55 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default HeartIcon;

