import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconTechHttp3 = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="none" viewBox="0 0 48 48" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<defs><clipPath id="clip0_1031_1961"><path fill="#fff" d="M0 0h48v48H0z" /></clipPath></defs><g fill="#03020D" clipPath="url(#clip0_1031_1961)"><path fillRule="evenodd" d="M44 2H4a2 2 0 0 0-2 2v6h44V4a2 2 0 0 0-2-2M4 0a4 4 0 0 0-4 4v8h48V4a4 4 0 0 0-4-4z" clipRule="evenodd" /><path fillRule="evenodd" d="M46 12H2v32a2 2 0 0 0 2 2h40a2 2 0 0 0 2-2zM0 10v34a4 4 0 0 0 4 4h40a4 4 0 0 0 4-4V10z" clipRule="evenodd" /><path d="M8.938 33v-3.576h4.32V33h1.548v-8.52h-1.548v3.54h-4.32v-3.54H7.39V33zM19.814 33v-7.116h2.316V24.48h-6.18v1.404h2.316V33zM26.353 33v-7.116h2.316V24.48h-6.18v1.404h2.316V33zM31.356 33v-3.588h1.668c1.716 0 2.688-1.092 2.688-2.472 0-1.416-.972-2.46-2.688-2.46h-3.216V33zm1.548-7.116c.708 0 1.236.348 1.236 1.056 0 .696-.528 1.068-1.236 1.068h-1.548v-2.124zM38.96 33.144c1.68 0 3.109-.96 3.109-2.844 0-1.8-1.368-2.736-2.604-2.844l2.208-1.8V24.48h-5.028v1.404h2.652l-2.304 2.652.708.864 1.332-.588c.792 0 1.488.6 1.488 1.464s-.684 1.464-1.56 1.464c-.72 0-1.236-.336-1.644-.9l-1.056 1.032c.66.888 1.62 1.272 2.7 1.272M14 6c0-1.09.91-2 2-2s2 .91 2 2-.91 2-2 2-2-.91-2-2M9 6c0-1.09.91-2 2-2s2 .91 2 2-.91 2-2 2-2-.91-2-2M4 6c0-1.09.91-2 2-2s2 .91 2 2-.91 2-2 2-2-.91-2-2" /></g></svg>;
const ForwardRef = forwardRef(IconTechHttp3);
export default ForwardRef;