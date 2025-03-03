/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Thu Aug 11 2022 10:23:19 GMT-0500 (Central Daylight Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const IpoIcon = ({
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
			<path d="M21,3 L15.699219,3.8007812 L17.242188,5.34375 L15.177734,7.4082031 L13.568359,5.9003906 L9.4921875,10.078125 L8.0078125,8.59375 L3.3027344,13.203125 L4.703125,14.630859 L7.9921875,11.40625 L9.5078125,12.921875 L13.630859,8.6992188 L15.222656,10.191406 L18.65625,6.7578125 L20.199219,8.3007812 L21,3 Z M19,10 L19,21 L21,21 L21,10 L19,10 Z M15,12 L15,21 L17,21 L17,12 L15,12 Z M11,14 L11,21 L13,21 L13,14 L11,14 Z M7,16 L7,21 L9,21 L9,16 L7,16 Z M3,18 L3,21 L5,21 L5,18 L3,18 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default IpoIcon;

