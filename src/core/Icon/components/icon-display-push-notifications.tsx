import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconDisplayPushNotifications = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={49} height={49} fill="none" viewBox="0 0 49 49" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path stroke="#C6CED9" strokeLinecap="round" strokeWidth={1.5} d="M26.833 8.423H7.718q-4.385 0-4.385 4.5v27q0 4.5 4.385 4.5h29.23q4.386 0 4.385-4.5v-18" /><path fill="#FF5416" fillRule="evenodd" d="M29.583 10.423a8.75 8.75 0 1 1 17.5 0 8.75 8.75 0 0 1-17.5 0" clipRule="evenodd" /><path fill="#03020D" d="M39.333 6.923v7h-1.42V8.328h-.04l-1.54 1.005V8.02l1.665-1.097z" /><path stroke="#C6CED9" strokeWidth={1.5} d="M29.086 19.423H14.588c-.598 0-1.171.232-1.594.645-.423.412-.66.972-.66 1.555v9.28c0 .584.237 1.145.66 1.557.423.413.996.645 1.594.645h13.443l2.352 2.169a.57.57 0 0 0 .61.104.56.56 0 0 0 .248-.203.54.54 0 0 0 .092-.302v-13.25c0-.582-.236-1.14-.657-1.553a2.28 2.28 0 0 0-1.59-.647Z" /></svg>;
const ForwardRef = forwardRef(IconDisplayPushNotifications);
export default ForwardRef;