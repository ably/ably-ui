import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconDisplayObserveAnalytics = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={49} height={49} fill="none" viewBox="0 0 49 49" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<defs><clipPath id="clip0_3563_11119"><path fill="#fff" d="M.5.923h48v48H.5z" /></clipPath></defs><g clipPath="url(#clip0_3563_11119)"><path fill="#C6CED9" fillRule="evenodd" d="M40.5 19.923a3 3 0 1 1 6 0 3 3 0 0 1-6 0M26.5 36.923a3 3 0 1 1 6 0 3 3 0 0 1-6 0M3.5 44.923a3 3 0 1 1 6 0 3 3 0 0 1-6 0" clipRule="evenodd" /><path stroke="#C6CED9" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="m6.5 44.923 10.084-13.5m26.916-11.5-6.705 8.438-6.927 8.719-4.543-5.637" /><path stroke="#FF5416" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M20.5 35.923v-3M20.5 41.923v-3M20.5 47.923v-3" /><circle cx={20.5} cy={10.923} r={8} stroke="#FF5416" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} /><path fill="#C6CED9" fillRule="evenodd" d="M19.5 7.923a1 1 0 1 1 2 0 1 1 0 0 1-2 0" clipRule="evenodd" /><path stroke="#C6CED9" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M20.5 14.923v-4" /><path fill="#FF5416" fillRule="evenodd" d="M16.5 25.923a4 4 0 1 1 8 0 4 4 0 0 1-8 0" clipRule="evenodd" /></g></svg>;
const ForwardRef = forwardRef(IconDisplayObserveAnalytics);
export default ForwardRef;