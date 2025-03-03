/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Thu Aug 11 2022 10:23:19 GMT-0500 (Central Daylight Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const ShareIcon = ({
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
			<path d="M14.6926657,9.72191139 C7.68867223,9.96341516 4.79530969,11.8747806 4.64265488,14.6169059 C6.21538993,12.583655 9.519325,11.4282633 14.6926657,11.24258 L14.6926657,14 L18.3969731,10.5 L14.6926657,7 L14.6926657,9.72191139 L14.6926657,9.72191139 Z M12.9906868,12.9934583 C1.24449051,14.0453608 6.31126495,21 6.31126495,21 C4.5920412,21 -3.01408213,9 12.9906868,8 L12.9906868,3 L21,10.5 L12.9906868,18 L12.9906868,13 L12.9906868,12.9934583 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default ShareIcon;

