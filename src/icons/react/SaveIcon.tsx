/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Thu Aug 11 2022 10:23:19 GMT-0500 (Central Daylight Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const SaveIcon = ({
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
			<path d="M5,3 C3.9057453,3 3,3.9057453 3,5 L3,19 C3,20.094255 3.9057453,21 5,21 L19,21 C20.094255,21 21,20.094255 21,19 L21,7 L17,3 L5,3 Z M5,5 L16.171875,5 L19,7.828125 L19,19 L5,19 L5,5 Z M7,5 L7,11 L17,11 L17,5 L7,5 Z M13,5 L13,9 L15,9 L15,5 L13,5 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default SaveIcon;

