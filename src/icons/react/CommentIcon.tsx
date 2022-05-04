/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Wed May 04 2022 16:41:33 GMT-0400 (Eastern Daylight Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const CommentIcon = ({
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
			<path d="M4.0019531,2 C2.9088903,2 2.0019531,2.9069372 2.0019531,4 L2,22 C2,22 6,18 6.0019531,18 C15.3339844,18 20,18 20,18 C21,18 22,17 22,16 C22,16 21.9967447,11.999349 21.990234,3.9980469 C21.990235,2.9049841 21.082089,2 19.990234,2 C10.0600886,2 4.73066163,2 4.0019531,2 Z M4.0019531,4 L19.990234,4 L20,16 L5,16 L4.0019531,17 L4.0019531,4 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default CommentIcon;

