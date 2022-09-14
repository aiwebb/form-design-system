/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Tue Sep 13 2022 10:36:25 GMT-0400 (Eastern Daylight Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const GoalIcon = ({
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
			<path d="M12,2 C6.477,2 2,6.477 2,12 C2,17.523 6.477,22 12,22 C17.523,22 22,17.523 22,12 C22,10.313 21.577844,8.7240781 20.839844,7.3300781 L19.34375,8.828125 C19.76475,9.801125 20,10.872 20,12 C20,16.418 16.418,20 12,20 C7.582,20 4,16.418 4,12 C4,7.582 7.582,4 12,4 C13.848105,4 15.543163,4.6354358 16.896484,5.6894531 L15.46875,7.1171875 C14.489493,6.4175694 13.296093,6 12,6 C8.686,6 6,8.686 6,12 C6,15.314 8.686,18 12,18 C15.314,18 18,15.314 18,12 C18,11.443 17.917391,10.905531 17.775391,10.394531 L15.980469,12.189453 C15.878469,14.308453 14.144,16 12,16 C9.791,16 8,14.209 8,12 C8,9.791 9.791,8 12,8 C12.742152,8 13.432775,8.2065691 14.025391,8.5605469 L12.515625,10.070312 C12.3475457,10.0245185 12.1742037,10.0008811 12,10 C10.8954305,10 10,10.8954305 10,12 C10,13.1045695 10.8954305,14 12,14 C13.1045695,14 14,13.1045695 14,12 C13.999926,11.8252283 13.976944,11.6512201 13.931641,11.482422 L22,3.4140625 L20.585938,2 L18.322266,4.2636719 C16.598132,2.8532535 14.400851,2 12,2 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default GoalIcon;

