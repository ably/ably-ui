import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconTechProtcolAdaptors = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="none" viewBox="0 0 48 48" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#03020D" fillRule="evenodd" d="m21.106 4.252.05-.002h5.84a.75.75 0 0 1 .641.361l20.004 33.031a.75.75 0 0 1 .001.776l-2.995 4.97a.75.75 0 0 1-.643.363H4.2l-.06-.003a.75.75 0 0 1-.496-.152.75.75 0 0 1-.222-.234l-3.064-5.09a.75.75 0 0 1 .003-.778L20.415 4.61a.75.75 0 0 1 .69-.357m24.563 33.03H14.46l2.111-3.52h21.19a.75.75 0 0 0 .644-1.133L22.376 5.75h4.197zm-32.92 1.393c.13.078.275.112.417.106h32.506l-2.091 3.47H5.424l15.532-25.767 2.128 3.505-10.592 17.657a.75.75 0 0 0 .257 1.029m11.215-17.237L17.47 32.263h13.067zM36.44 32.263h-4.147L21.595 14.646a.75.75 0 0 0-1.284.002L4.088 41.561l-2.211-3.674 19.17-31.435z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(IconTechProtcolAdaptors);
export default ForwardRef;