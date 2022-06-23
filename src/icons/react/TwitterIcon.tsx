/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Thu Jun 23 2022 10:17:42 GMT-0400 (Eastern Daylight Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const TwitterIcon = ({
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
			<path d="M12,2 C6.4889971,2 2,6.4889971 2,12 C2,17.511003 6.4889971,22 12,22 C17.511003,22 22,17.511003 22,12 C22,6.4889971 17.511003,2 12,2 Z M12,4 C16.430123,4 20,7.5698774 20,12 C20,16.430123 16.430123,20 12,20 C7.5698774,20 4,16.430123 4,12 C4,7.5698774 7.5698774,4 12,4 Z M14.6221317,8 C13.3646697,8 12.3433685,9.02221782 12.3433685,10.2787633 C12.3433685,10.5143083 12.4221322,10.6715915 12.4221322,10.828316 C10.5368557,10.750412 8.88745323,9.80794543 7.78763223,8.47257934 C7.55208723,8.78694484 7.47257934,9.17849835 7.47257934,9.57168436 C7.47257934,10.3571399 7.86598018,10.9872741 8.49471119,11.5371846 C8.10244169,11.4583641 7.78694484,11.3788562 7.47257934,11.2221317 C7.47257934,12.3219527 8.25776272,13.186587 9.27876322,13.422132 C9.04321822,13.5009525 8.88599249,13.5008948 8.65044749,13.5008948 C8.57162708,13.5008948 8.41335596,13.422132 8.25663147,13.422132 C8.57099688,14.286408 9.35686774,14.9920266 10.3778682,14.9920266 C9.59241274,15.5419362 8.57055301,15.9353944 7.54955251,15.9353944 L7,15.9353944 C8.0210005,16.5632089 9.20008597,16.9575268 10.4566311,16.9575268 C14.6203701,16.9575268 16.8991048,13.5001506 16.8991048,10.515053 L16.8991048,10.2000001 C17.2922908,9.88563459 17.6838015,9.49326483 18,9.0203418 C17.52891,9.25680331 17.1356956,9.33533741 16.6646056,9.41415791 C17.1356956,9.10070893 17.5282226,8.70743695 17.6849471,8.15752645 C17.2917611,8.39307144 16.8206995,8.62825845 16.270789,8.70707896 C15.877603,8.23598896 15.2508627,8 14.6221317,8 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default TwitterIcon;

