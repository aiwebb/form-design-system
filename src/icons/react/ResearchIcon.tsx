/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Thu Aug 11 2022 10:23:19 GMT-0500 (Central Daylight Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const ResearchIcon = ({
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
			<path d="M5,3 C3.9069372,3 3,3.9069372 3,5 L3,19 C3,20.093063 3.9069372,21 5,21 L19,21 C20.093063,21 21,20.093063 21,19 L21,5 C21,3.9069372 20.093063,3 19,3 L5,3 Z M5,5 L19,5 L19,6 L5,6 L5,5 Z M5,8 L19,8 L19,19 L5,19 L5,8 Z M11,9 L11,11 L18,11 L18,9 L11,9 Z M11,12 L11,13 L18,13 L18,12 L11,12 Z M11,14 L11,15 L18,15 L18,14 L11,14 Z M11,16 L11,17 L18,17 L18,16 L11,16 Z M6,9 L6,13 L10,13 L10,9 L6,9 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default ResearchIcon;

