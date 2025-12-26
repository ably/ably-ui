import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconDisplayMessagePersistence = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={49} height={49} fill="none" viewBox="0 0 49 49" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path stroke="#FF5416" strokeLinecap="round" strokeWidth={1.5} d="M3.667 24.423c0 11.598 9.402 21 21 21s21-9.402 21-21-9.402-21-21-21" /><rect width={22} height={16} x={13.667} y={16.423} stroke="#C6CED9" strokeWidth={1.607} rx={1.863} /><path stroke="#C6CED9" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m14.667 17.423 10.31 7 9.69-7" /><path stroke="#FF5416" strokeDasharray="1.5 5" strokeLinecap="round" strokeWidth={1.5} d="M3.667 24.423c0-11.598 9.402-21 21-21" /></svg>;
const ForwardRef = forwardRef(IconDisplayMessagePersistence);
export default ForwardRef;