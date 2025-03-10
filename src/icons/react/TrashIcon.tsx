/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Thu Aug 11 2022 10:23:19 GMT-0500 (Central Daylight Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const TrashIcon = ({
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
		<g transform="translate(4.000000, 2.000000)">
			<path d="M6,0 L5,1 L0,1 L0,3 L1,3 L1,18 C1,18.522222 1.1913289,19.05461 1.5683594,19.431641 C1.9453899,19.808671 2.4777778,20 3,20 L13,20 C13.522222,20 14.05461,19.808671 14.431641,19.431641 C14.808671,19.05461 15,18.522222 15,18 L15,3 L16,3 L16,1 L11,1 L10,0 L6,0 Z M3,3 L13,3 L13,18 L3,18 L3,3 Z M5,5 L5,16 L7,16 L7,5 L5,5 Z M9,5 L9,16 L11,16 L11,5 L9,5 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default TrashIcon;

