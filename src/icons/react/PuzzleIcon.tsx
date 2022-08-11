/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Thu Aug 11 2022 10:23:19 GMT-0500 (Central Daylight Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const PuzzleIcon = ({
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
		<g fillRule="nonzero">
			<g transform="translate(2.000000, 2.000000)">
				<path d="M20,11.5 C20,13.26 18.7,14.72 17,14.96 L17,18 C17,19.1045695 16.1045695,20 15,20 L11.2,20 L11.2,19.7 C11.2,18.2088312 9.99116882,17 8.5,17 C7,17 5.8,18.21 5.8,19.7 L5.8,20 L2,20 C0.8954305,20 0,19.1045695 0,18 L0,14.2 L0.3,14.2 C1.79,14.2 3,13 3,11.5 C3,10 1.79,8.8 0.3,8.8 L0,8.8 L0,5 C0,3.8954305 0.8954305,3 2,3 L5.04,3 C5.28,1.3 6.74,0 8.5,0 C10.26,0 11.72,1.3 11.96,3 L15,3 C16.1045695,3 17,3.8954305 17,5 L17,8.04 C18.7,8.28 20,9.74 20,11.5 M15,13 L16.5,13 C17.3284271,13 18,12.3284271 18,11.5 C18,10.6715729 17.3284271,10 16.5,10 L15,10 L15,5 L10,5 L10,3.5 C10,2.67157288 9.32842712,2 8.5,2 C7.67157288,2 7,2.67157288 7,3.5 L7,5 L2,5 L2,7.12 C3.76,7.8 5,9.5 5,11.5 C5,13.5 3.75,15.2 2,15.88 L2,18 L4.12,18 C4.8,16.25 6.5,15 8.5,15 C10.5,15 12.2,16.25 12.88,18 L15,18 L15,13 Z"/>
			</g>
		</g>
	</g>
</svg>
  </div>
);

export default PuzzleIcon;

