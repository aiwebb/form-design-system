/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Wed May 04 2022 16:41:33 GMT-0400 (Eastern Daylight Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const OrderAlphabeticalZaIcon = ({
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
			<path d="M12,3 L12,13 L16,13 L9,21 L2,13 L6,13 L6,3 L12,3 Z M19.9474384,14 L22,21 L20.3078624,21 L19.9262369,19.462674 L17.9346291,19.462674 L17.5397527,21 L16,21 L18.0485866,14 L19.9474384,14 Z M10,5 L8,5 L8,13 L8,15 L5.828,15 L9,18.172 L12.172,15 L10,15 L10,13 L10,5 Z M19.0660378,16 L18.9528302,16 L18,18 L20,18 L19.0660378,16 Z M21.8893784,3 L21.8893784,4.13020833 L18.3197579,8.47634578 L18.3197579,8.56901022 L22,8.56901022 L22,10 L16,10 L16,8.86979167 L19.5696203,4.52365422 L19.5696203,4.43098978 L16.0577875,4.43098978 L16.0577875,3 L21.8893784,3 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default OrderAlphabeticalZaIcon;

