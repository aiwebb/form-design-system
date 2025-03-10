/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Thu Aug 11 2022 10:23:19 GMT-0500 (Central Daylight Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const OrderAlphabeticalAzIcon = ({
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
			<path d="M12,3 L12,13 L16,13 L9,21 L2,13 L6,13 L6,13 L6,3 L6,3 L12,3 Z M21.8893784,14 L21.8893784,15.1302083 L18.3197579,19.4763458 L18.3197579,19.5690102 L22,19.5690102 L22,21 L16,21 L16,19.8697917 L19.5696203,15.5236542 L19.5696203,15.4309898 L16.0577875,15.4309898 L16.0577875,14 L21.8893784,14 Z M10,5 L8,5 L8,13 L8,15 L5.828,15 L9,18.172 L12.172,15 L10,15 L10,13 L10,5 Z M19.9474384,3 L22,10 L20.3078624,10 L19.9262369,8.462674 L17.9346291,8.462674 L17.5397527,10 L16,10 L18.0485866,3 L19.9474384,3 Z M19.0660378,5 L18.9528302,5 L18,7 L20,7 L19.0660378,5 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default OrderAlphabeticalAzIcon;

