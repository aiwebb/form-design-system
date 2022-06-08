/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Wed Jun 08 2022 16:40:44 GMT-0400 (Eastern Daylight Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const StarHalfIcon = ({
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
		<g transform="translate(1.960937, 2.500000)">
			<polygon points="10.0400002 0 6.93669511 6.28601253 0 7.29490067 5.02000016 12.1883636 3.83516642 19.0978261 10.0400002 15.8349252 16.2448344 19.0978261 15.0600001 12.1883636 20.08 7.29490067 13.143305 6.28601253"/>
			<polygon points="10.0400002 0 6.93669511 6.28601253 0 7.29490067 5.02000016 12.1883636 3.83516642 19.0978261 10.0400002 15.8349252 10.0400002 12.1883636 10.0390625 9.32348271 10.0400002 7.29490067 10.0390625 6.52995489"/>
		</g>
	</g>
</svg>
  </div>
);

export default StarHalfIcon;

