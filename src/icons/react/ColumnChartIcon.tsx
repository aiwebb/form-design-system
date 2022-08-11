/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Thu Aug 11 2022 10:23:19 GMT-0500 (Central Daylight Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const ColumnChartIcon = ({
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
			<path d="M3,21 L3,12 L5,12 L5,21 L3,21 Z M7,21 L7,16 L9,16 L9,21 L7,21 Z M11,21 L11,8 L13,8 L13,21 L11,21 Z M15,21 L15,3 L17,3 L17,21 L15,21 Z M19,21 L19,14 L21,14 L21,21 L19,21 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default ColumnChartIcon;

