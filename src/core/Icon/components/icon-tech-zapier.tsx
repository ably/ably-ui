import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconTechZapier = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="none" viewBox="0 0 48 48" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<defs><clipPath id="clip0_1031_1930"><path fill="#fff" d="M0 0h48v48H0z" /></clipPath></defs><g clipPath="url(#clip0_1031_1930)"><path fill="#FF4A00" d="M30 24.01c0 1.731-.312 3.448-.922 5.067a14.4 14.4 0 0 1-5.068.924h-.02a14.4 14.4 0 0 1-5.067-.923A14.4 14.4 0 0 1 18 24.011v-.021c0-1.73.311-3.447.92-5.067A14.3 14.3 0 0 1 23.99 18h.02c1.731 0 3.448.312 5.068.923.61 1.62.923 3.336.922 5.066zM47.667 20h-14.01l9.906-9.906a24 24 0 0 0-2.593-3.066 24 24 0 0 0-3.065-2.59L28 14.342V.334A24 24 0 0 0 24.012 0h-.025c-1.359 0-2.69.116-3.987.334v14.01l-9.906-9.907A24 24 0 0 0 7.03 7.03l-.006.004a24 24 0 0 0-2.589 3.06L14.343 20H.334S0 22.631 0 23.992v.016c0 1.36.115 2.694.334 3.992h14.01l-9.908 9.906a24.2 24.2 0 0 0 5.658 5.658L20 33.657v14.01c1.316.22 2.648.332 3.983.333h.034a24 24 0 0 0 3.982-.333v-14.01l9.907 9.907a24 24 0 0 0 3.064-2.592l.002-.002a24 24 0 0 0 2.59-3.064L33.657 28h14.01c.219-1.296.333-2.625.334-3.983v-.034A24 24 0 0 0 47.667 20" /></g></svg>;
const ForwardRef = forwardRef(IconTechZapier);
export default ForwardRef;