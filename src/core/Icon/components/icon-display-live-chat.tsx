import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconDisplayLiveChat = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="none" viewBox="0 0 48 48" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="currentColor" fillRule="evenodd" d="M26 5.25A4.75 4.75 0 0 1 30.75 10v7.25H40A4.75 4.75 0 0 1 44.75 22v17.676c0 1.536-1.838 2.327-2.953 1.27L37.85 37.21H22a4.75 4.75 0 0 1-4.75-4.75v-7.25h-7.101l-3.946 3.736c-1.115 1.057-2.953.266-2.953-1.27V10A4.75 4.75 0 0 1 8 5.25zm-7.25 19.96v7.25A3.25 3.25 0 0 0 22 35.71h16.449l4.38 4.147a.25.25 0 0 0 .421-.181V22A3.25 3.25 0 0 0 40 18.75h-9.25v1.71A4.75 4.75 0 0 1 26 25.21zm10.5-6.46v1.71A3.25 3.25 0 0 1 26 23.71h-7.25V22A3.25 3.25 0 0 1 22 18.75zm0-1.5H22A4.75 4.75 0 0 0 17.25 22v1.71H9.551l-4.38 4.147a.25.25 0 0 1-.421-.181V10A3.25 3.25 0 0 1 8 6.75h18A3.25 3.25 0 0 1 29.25 10z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(IconDisplayLiveChat);
export default ForwardRef;