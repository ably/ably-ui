import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconDisplay48hrs = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="none" viewBox="0 0 48 48" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="currentColor" fillRule="evenodd" d="M4.75 24C4.75 13.369 13.369 4.75 24 4.75a.75.75 0 0 0 0-1.5C12.54 3.25 3.25 12.54 3.25 24S12.54 44.75 24 44.75 44.75 35.46 44.75 24a.75.75 0 0 0-1.5 0c0 10.632-8.618 19.25-19.25 19.25S4.75 34.632 4.75 24m28.345 2.36c0 2.322-1.944 3.852-4.122 3.852s-4.122-1.53-4.122-3.852c0-1.476.774-2.61 1.998-3.222-.954-.558-1.548-1.512-1.548-2.736C25.3 18.35 27.029 17 28.973 17s3.672 1.35 3.672 3.402c0 1.224-.594 2.178-1.566 2.736 1.224.612 2.016 1.746 2.016 3.222m-6.786 0c0 1.476 1.17 2.502 2.664 2.502s2.664-1.026 2.664-2.502-1.17-2.52-2.664-2.52-2.664 1.044-2.664 2.52m.45-5.958c0 1.224.972 2.088 2.214 2.088s2.214-.864 2.214-2.088c0-1.206-.972-2.052-2.214-2.052s-2.214.846-2.214 2.052m-5.782 6.606v2.988H19.52v-2.988h-5.166v-1.17l5.022-8.622h1.674l-5.076 8.424h3.546v-2.862h1.458v2.862h2.7v1.368z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(IconDisplay48hrs);
export default ForwardRef;