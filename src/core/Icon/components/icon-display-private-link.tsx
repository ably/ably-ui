import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconDisplayPrivateLink = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={49} height={48} fill="none" viewBox="0 0 49 48" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<defs><clipPath id="clip0_2889_2903"><path fill="#fff" d="M.5 0h48v48H.5z" /></clipPath></defs><g clipPath="url(#clip0_2889_2903)"><circle cx={35.5} cy={13} r={13} fill="#FF5416" /><rect width={24.5} height={24.5} x={1.25} y={22.75} stroke="#C6CED9" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} rx={6.25} /><path fill="#C6CED9" fillRule="evenodd" d="M6.779 39.999 13.335 28h-1.769L5.5 39.102zm13.204 0L13.426 28h1.77l3.032 5.551 3.033 5.551zm-6.602-5.027 6.51 5.098-1.328.93-5.182-4.056L8.199 41l-1.329-.93z" clipRule="evenodd" /><rect width={12} height={9} x={29.5} y={10} stroke="#03020D" strokeLinejoin="round" strokeWidth={1.5} rx={0.996} /><path stroke="#03020D" strokeLinejoin="round" strokeWidth={1.5} d="M38.5 10V8a3 3 0 1 0-6 0v2" /><path stroke="#C6CED9" strokeLinecap="round" strokeMiterlimit={2.613} strokeWidth={1.5} d="M40.5 36v0a4 4 0 0 1-4 4v0" /><path stroke="#C6CED9" strokeLinecap="round" strokeWidth={1.5} d="M40.5 32v-3.5M32.5 40H29" /><path stroke="#C6CED9" strokeLinecap="round" strokeMiterlimit={2.613} strokeWidth={1.5} d="M8.5 12v0a4 4 0 0 1 4-4v0" /><path stroke="#C6CED9" strokeLinecap="round" strokeWidth={1.5} d="M8.5 16v3.5M16.5 8H20" /></g></svg>;
const ForwardRef = forwardRef(IconDisplayPrivateLink);
export default ForwardRef;