/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Thu Aug 11 2022 10:23:19 GMT-0500 (Central Daylight Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const ExpertTagIcon = ({
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
			<path d="M17,14 L18.405,17.1405263 L22,17.4294737 L19.27,19.67 L20.09,23 L17,21.2331579 L13.91,23 L14.73,19.67 L12,17.4294737 L15.595,17.1405263 L17,14 Z M9.2,14 L13,14 L11.9,16 L8.9,16 L8,22 L6,22 L6.9,16 L2,16 L2,14 L7.2,14 L7.8,10 L3,10 L3,8 L8.1,8 L9,2 L11,2 L10.1,8 L15.099,8 L16,2 L18,2 L17.099,8 L22,8 L22,10 L16.799,10 L16.3499014,13.0006572 L14.3485731,13.0095125 L14.4999893,12.0000716 L14.799,10 L9.8,10 L9.2,14 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default ExpertTagIcon;

