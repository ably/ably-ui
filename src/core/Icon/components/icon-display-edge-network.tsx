import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconDisplayEdgeNetwork = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={49} height={49} fill="none" viewBox="0 0 49 49" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path stroke="#C6CED9" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={1.5} d="M44.653 16.182a21.8 21.8 0 0 1 1.389 4.33 22.3 22.3 0 0 1 .458 4.476c0 3.162-.685 6.286-2.01 9.159a21.9 21.9 0 0 1-5.66 7.485 22 22 0 0 1-8.28 4.445 22.06 22.06 0 0 1-18.16-2.776 22 22 0 0 1-6.563-6.714 21.9 21.9 0 0 1-3.111-14.664M35.412 5.923a22 22 0 0 0-4.885-2.108 21.9 21.9 0 0 0-8.671-.75 22 22 0 0 0-8.291 2.687 22.3 22.3 0 0 0-4.834 3.67" /><path fill="#FF5416" fillRule="evenodd" d="M2.5 15.923a4 4 0 1 1 8 0 4 4 0 0 1-8 0M39 7.923a4 4 0 1 0 0 8 4 4 0 0 0 0-8M23 16.923a4 4 0 1 0 0 8 4 4 0 0 0 0-8M11.5 35.423a4 4 0 1 1 8 0 4 4 0 0 1-8 0M31.5 34.423a4 4 0 1 1 8 0 4 4 0 0 1-8 0" clipRule="evenodd" /><path stroke="#C6CED9" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={1.5} d="M20.82 3.61a26 26 0 0 0-.445 4.748 25.5 25.5 0 0 0 .669 5.845M26.849 26.614A28.7 28.7 0 0 0 30 30.06M16.5 23.36c-4.81 2.492-9.002 5.921-12.284 10.063M45.813 20.11A47.6 47.6 0 0 0 29.5 18.993" /><path stroke="#C6CED9" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={1.5} d="M11.136 20.923a25.9 25.9 0 0 1 3.754 7.5" /><path stroke="#C6CED9" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M15 42.232a27 27 0 0 1-.657 2.19z" /><path stroke="#C6CED9" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={1.5} d="M30.354 39.104a26 26 0 0 0-3.052 7.588M46 28.453A29.6 29.6 0 0 0 40.693 30" /></svg>;
const ForwardRef = forwardRef(IconDisplayEdgeNetwork);
export default ForwardRef;