import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconDisplayMessageQueues = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={48} height={49} fill="none" viewBox="0 0 48 49" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path stroke="#C6CED9" strokeWidth={1.5} d="M35 13.423v-7a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h2" /><path stroke="#C6CED9" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m4 4.423 12.5 8.891M34 4.424l-11.748 8.89" /><path stroke="#C6CED9" strokeWidth={1.5} d="M40 23.423v-7a3 3 0 0 0-3-3H11a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h2" /><path stroke="#C6CED9" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m9 14.423 12.5 8.891m17.5-8.89-11.748 8.89" /><rect width={32} height={22} x={13} y={23.423} stroke="#FF5416" strokeWidth={1.5} rx={3} /><path stroke="#FF5416" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m14 24.423 15.465 11 14.535-11" /></svg>;
const ForwardRef = forwardRef(IconDisplayMessageQueues);
export default ForwardRef;