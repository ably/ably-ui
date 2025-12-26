import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconTechKaazing = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="none" viewBox="0 0 48 48" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<defs><clipPath id="clip0_1031_1931"><path fill="#fff" d="M0 0h48v48H0z" /></clipPath></defs><g fill="#F07D3C" clipPath="url(#clip0_1031_1931)"><path d="M42.621 11h4.672a.5.5 0 0 1 .353.854L36.061 23.439a1.5 1.5 0 0 0 0 2.122l11.585 11.585a.5.5 0 0 1-.353.854H42.62a1.5 1.5 0 0 1-1.06-.44l-12-12a1.5 1.5 0 0 1 0-2.12l12-12a1.5 1.5 0 0 1 1.06-.44M5.379 11H.707a.5.5 0 0 0-.353.854l11.585 11.585a1.5 1.5 0 0 1 0 2.122L.354 37.146A.5.5 0 0 0 .707 38H5.38a1.5 1.5 0 0 0 1.06-.44l12-12a1.5 1.5 0 0 0 0-2.12l-12-12A1.5 1.5 0 0 0 5.38 11" /><rect width={6} height={34} x={21} y={7} rx={1.5} /></g></svg>;
const ForwardRef = forwardRef(IconTechKaazing);
export default ForwardRef;