import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconDisplayCustom = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="none" viewBox="0 0 48 48" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path stroke="#C6CED9" strokeLinecap="round" strokeWidth={1.5} d="M27 35.106h16M35.114 26.995v16" /><path stroke="#C6CED9" strokeWidth={1.5} d="M18 26.995H8q-3 0-3 3v10q0 3 3 3h10q3 0 3-3v-10q0-3-3-3ZM40 4.995H30q-3 0-3 3v10q0 3 3 3h10q3 0 3-3v-10q0-3-3-3Z" /><path fill="#FF5416" fillRule="evenodd" d="M5.22 5.215c.69-.69 1.664-.97 2.78-.97h10c1.116 0 2.09.28 2.78.97s.97 1.665.97 2.78v10c0 1.116-.28 2.09-.97 2.78s-1.664.97-2.78.97H8c-1.116 0-2.09-.28-2.78-.97s-.97-1.664-.97-2.78v-10c0-1.116.28-2.09.97-2.78" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(IconDisplayCustom);
export default ForwardRef;