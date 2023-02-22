import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@elementor/ui';

const MobileExtraIcon = React.forwardRef( ( props: SvgIconProps, ref ) => {
	return (
		<SvgIcon viewBox="0 0 21 20" { ...props } ref={ ref }>
			<path fillRule="evenodd" clipRule="evenodd" d="M4.99082 6.45898C4.39085 6.45898 4.04175 6.87221 4.04175 7.22287L4.04175 12.7784C4.04175 13.1291 4.39085 13.5423 4.99082 13.5423L16.0093 13.5423C16.6093 13.5423 16.9584 13.1291 16.9584 12.7784V11.4234C16.8933 11.4465 16.8231 11.459 16.7501 11.459C16.4049 11.459 16.1251 11.1792 16.1251 10.834V9.16732C16.1251 8.82214 16.4049 8.54232 16.7501 8.54232C16.8231 8.54232 16.8933 8.55485 16.9584 8.57788V7.22287C16.9584 6.87221 16.6093 6.45898 16.0093 6.45898L4.99082 6.45898ZM2.79175 7.22287C2.79175 6.03941 3.85212 5.20898 4.99082 5.20898L16.0093 5.20898C17.148 5.20898 18.2084 6.03942 18.2084 7.22287V12.7784C18.2084 13.9619 17.148 14.7923 16.0093 14.7923L4.99082 14.7923C3.85212 14.7923 2.79175 13.9619 2.79175 12.7784L2.79175 7.22287Z" />
		</SvgIcon>
	);
} );

export default MobileExtraIcon;