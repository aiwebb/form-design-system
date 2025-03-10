/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Thu Aug 11 2022 10:23:19 GMT-0500 (Central Daylight Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const EmailIcon = ({
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
			<path d="M12,2 C6.4889971,2 2,6.4889971 2,12 C2,17.511003 6.4889971,22 12,22 C17.511003,22 22,17.511003 22,12 C22,6.4889971 17.511003,2 12,2 Z M12,4 C16.430123,4 20,7.5698774 20,12 C20,16.430123 16.430123,20 12,20 C7.5698774,20 4,16.430123 4,12 C4,7.5698774 7.5698774,4 12,4 Z M7.91452483,8 C7.50851566,8 7.16423989,8.25848924 7,8.62875534 L11.9950189,12 L17,8.64592272 C16.8388205,8.26686693 16.487643,8 16.0755131,8 L7.91452483,8 Z M7,11 L7,15.0461998 C7,15.5726975 7.448,16 8,16 L16,16 C16.552,16 17,15.5726975 17,15.0461998 L17,11.0204924 L12,13.9899405 L7,11 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default EmailIcon;

