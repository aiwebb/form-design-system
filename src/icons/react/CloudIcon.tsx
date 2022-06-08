/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Wed Jun 08 2022 16:40:44 GMT-0400 (Eastern Daylight Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const CloudIcon = ({
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
			<path d="M19.355,10.036 C18.674,6.595 15.641,4 12,4 C9.108,4 6.603,5.639 5.352,8.036 C2.343,8.36 0,10.906 0,14 C0,17.314 2.686,20 6,20 L19,20 C21.761,20 24,17.761 24,15 C24,12.36 21.948,10.221 19.355,10.036 Z M19,18 L6,18 C3.794,18 2,16.206 2,14 C2,11.952 3.533,10.243 5.565,10.025 L6.629,9.91 L7.124,8.961 C8.078,7.135 9.947,6 12,6 C14.617,6 16.885,7.861 17.393,10.424 L17.69,11.922 L19.213,12.031 C20.776,12.142 22,13.447 22,15 C22,16.654 20.654,18 19,18 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default CloudIcon;

