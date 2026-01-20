import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconDisplayRewind = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={49} height={49} fill="none" viewBox="0 0 49 49" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path stroke="#FF5416" strokeLinecap="round" strokeWidth={1.5} d="M20.693 10.79a1 1 0 0 1 1.64.768v25.73a1 1 0 0 1-1.64.768L5.255 25.191a1 1 0 0 1 0-1.536z" /><path stroke="#C6CED9" strokeLinecap="round" strokeWidth={1.5} d="M39.694 10.79a1 1 0 0 1 1.64.768v25.73a1 1 0 0 1-1.64.768L24.256 25.191a1 1 0 0 1 0-1.536z" /></svg>;
const ForwardRef = forwardRef(IconDisplayRewind);
export default ForwardRef;