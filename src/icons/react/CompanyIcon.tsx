/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Thu Aug 11 2022 10:23:19 GMT-0500 (Central Daylight Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const CompanyIcon = ({
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
			<path d="M4,2 L20,2 L20,22 L4,22 L4,2 Z M6,4 L6,20 L18,20 L18,4 L6,4 Z M9,16 L15,16 L15,20 L9,20 L9,16 Z M8,12 L10,12 L10,14 L8,14 L8,12 Z M8,9 L10,9 L10,11 L8,11 L8,9 Z M8,6 L10,6 L10,8 L8,8 L8,6 Z M11,12 L13,12 L13,14 L11,14 L11,12 Z M11,9 L13,9 L13,11 L11,11 L11,9 Z M11,6 L13,6 L13,8 L11,8 L11,6 Z M14,12 L16,12 L16,14 L14,14 L14,12 Z M14,9 L16,9 L16,11 L14,11 L14,9 Z M14,6 L16,6 L16,8 L14,8 L14,6 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default CompanyIcon;

