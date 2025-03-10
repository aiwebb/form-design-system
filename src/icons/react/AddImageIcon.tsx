/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Thu Aug 11 2022 10:23:19 GMT-0500 (Central Daylight Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const AddImageIcon = ({
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
			<path d="M20,15.0189926 L16.5809502,11.6648795 L12.9824682,15.2102985 L12.9707292,15.2276737 C12.7358622,14.6005237 12.4066283,14.0183921 12,13.498001 L12.0144337,13.499179 L16.5809502,9 L20,12.3831537 L20,6 L4,6 L4,12 C4,12 2,12 2,12 L2,6 C2,4.66666667 2.66666667,4 4,4 L20,4 C21.3333333,4 22,4.66666667 22,6 L22,17 C22,18.3333333 21.3333333,19 20,19 L12,19 L12,17 L20,17 L20,15.0189926 Z M3,17 L3,15 L6,15 L6,12 L8,12 L8,15 L11,15 L11,17 L8,17 L8,20 L6,20 L6,17 L3,17 Z M8.5,11 C7.67157288,11 7,10.3284271 7,9.5 C7,8.67157288 7.67157288,8 8.5,8 C9.32842712,8 10,8.67157288 10,9.5 C10,10.3284271 9.32842712,11 8.5,11 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default AddImageIcon;

