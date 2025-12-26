import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconTechAzureStaticWebApps = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="none" viewBox="0 0 48 48" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#3999C6" d="M0 6.586C0 5.71.711 5 1.588 5h44.824C47.289 5 48 5.71 48 6.586v34.828C48 42.29 47.289 43 46.412 43H1.588C.711 43 0 42.29 0 41.414z" /><path fill="#59B4D9" d="M3 19.55c0-.856.727-1.55 1.623-1.55h38.754c.896 0 1.623.694 1.623 1.55v18.9c0 .856-.727 1.55-1.623 1.55H4.623C3.727 40 3 39.306 3 38.45z" /><path fill="#fff" fillRule="evenodd" d="M17.788 22.654c.31.31.31.812 0 1.121l-5.39 5.382 5.39 5.382c.31.31.31.812 0 1.121a.795.795 0 0 1-1.123 0l-5.95-5.942a.79.79 0 0 1 0-1.122l5.95-5.942a.795.795 0 0 1 1.123 0M29.384 35.66a.79.79 0 0 1 0-1.121l5.39-5.382-5.39-5.382a.79.79 0 0 1 0-1.121.795.795 0 0 1 1.123 0l5.95 5.942c.31.31.31.812 0 1.122l-5.95 5.942a.795.795 0 0 1-1.123 0M26.322 20.542a.793.793 0 0 1 .51 1l-5.133 15.722a.794.794 0 0 1-1.51-.491l5.132-15.723a.794.794 0 0 1 1.001-.508" clipRule="evenodd" /><path fill="#0072C6" d="M0 6.595C0 5.715.711 5 1.588 5h44.824C47.289 5 48 5.714 48 6.595V15H0V6.595" /><path fill="#fff" d="M19 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0M13 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0M7 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0" /></svg>;
const ForwardRef = forwardRef(IconTechAzureStaticWebApps);
export default ForwardRef;