/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Thu Aug 11 2022 10:23:19 GMT-0500 (Central Daylight Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const NopeIcon = ({
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
			<path d="M12,2 C6.4889971,2 2,6.4889971 2,12 C2,17.511003 6.4889971,22 12,22 C17.511003,22 22,17.511003 22,12 C22,6.4889971 17.511003,2 12,2 Z M12,4 C16.430123,4 20,7.5698774 20,12 C20,13.85307 19.369262,15.55056 18.318359,16.904297 L7.0957031,5.6816406 C8.4494397,4.6307377 10.14693,4 12,4 Z M5.6816406,7.0957031 L16.904297,18.318359 C15.55056,19.369262 13.85307,20 12,20 C7.5698774,20 4,16.430123 4,12 C4,10.14693 4.6307377,8.4494397 5.6816406,7.0957031 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default NopeIcon;

