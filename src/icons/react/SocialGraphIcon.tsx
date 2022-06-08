/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Wed Jun 08 2022 16:40:44 GMT-0400 (Eastern Daylight Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const SocialGraphIcon = ({
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
			<path d="M19,3 C17.35499,3 16,4.3549904 16,6 C16,6.4598564 16.114225,6.8919393 16.302734,7.2832031 L12.585938,11 L7.8125,11 C7.3951413,9.8426699 6.2931586,9 5,9 C3.3549904,9 2,10.35499 2,12 C2,13.64501 3.3549904,15 5,15 C6.2931586,15 7.3951413,14.15733 7.8125,13 L12.585938,13 L16.302734,16.716797 C16.114225,17.108061 16,17.540143 16,18 C16,19.64501 17.35499,21 19,21 C20.64501,21 22,19.64501 22,18 C22,16.35499 20.64501,15 19,15 C18.540143,15 18.108061,15.114225 17.716797,15.302734 L14.414062,12 L17.716797,8.6972656 C18.108061,8.8857754 18.540143,9 19,9 C20.64501,9 22,7.6450096 22,6 C22,4.3549904 20.64501,3 19,3 Z M19,5 C19.564129,5 20,5.4358706 20,6 C20,6.5641294 19.564129,7 19,7 C18.435871,7 18,6.5641294 18,6 C18,5.4358706 18.435871,5 19,5 Z M5,11 C5.5641294,11 6,11.435871 6,12 C6,12.564129 5.5641294,13 5,13 C4.4358706,13 4,12.564129 4,12 C4,11.435871 4.4358706,11 5,11 Z M19,17 C19.564129,17 20,17.435871 20,18 C20,18.564129 19.564129,19 19,19 C18.435871,19 18,18.564129 18,18 C18,17.435871 18.435871,17 19,17 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default SocialGraphIcon;

