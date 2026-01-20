import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconDisplayPushNotificationsCol = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="none" viewBox="0 0 48 48" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path stroke="#03020D" strokeLinecap="round" strokeWidth={1.5} d="M26.5 8H7.385Q3 8 3 12.5v27Q3 44 7.385 44h29.23Q41 44 41 39.5v-18" /><path fill="#FF5416" fillRule="evenodd" d="M29.25 10a8.75 8.75 0 1 1 17.5 0 8.75 8.75 0 0 1-17.5 0" clipRule="evenodd" /><path fill="#fff" d="M39 6.5v7h-1.421V7.905h-.04L36 8.91V7.597L37.664 6.5z" /><path stroke="#03020D" strokeWidth={1.5} d="M28.753 19H14.255c-.598 0-1.172.232-1.595.645-.423.412-.66.972-.66 1.555v9.28c0 .584.237 1.145.66 1.557.423.413.997.645 1.595.645h13.443l2.352 2.168a.57.57 0 0 0 .61.105.56.56 0 0 0 .248-.203.54.54 0 0 0 .092-.302V21.2c0-.582-.236-1.14-.658-1.553a2.28 2.28 0 0 0-1.59-.647Z" /></svg>;
const ForwardRef = forwardRef(IconDisplayPushNotificationsCol);
export default ForwardRef;