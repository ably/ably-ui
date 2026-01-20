import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconTechIronmq = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="none" viewBox="0 0 48 48" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<defs><clipPath id="clip0_1031_1940"><path fill="#fff" d="M0 0h48v48H0z" /></clipPath></defs><g clipPath="url(#clip0_1031_1940)"><path fill="#3177BC" d="M43.792 10.705 26.011.427a3.45 3.45 0 0 0-3.502 0L4.73 10.705C3.681 11.342 3 12.479 3 13.707v20.51c0 1.227.682 2.41 1.728 3L22.51 47.496a3.4 3.4 0 0 0 1.728.455c.591 0 1.228-.182 1.728-.455l17.827-10.232a3.46 3.46 0 0 0 1.728-3.001V13.706a3.46 3.46 0 0 0-1.728-3.001m-9.914 16.872a.72.72 0 0 1 .591.59l.455 4.185c0 .182-.045.409-.182.545a.73.73 0 0 1-.5.228H14.278a.73.73 0 0 1-.5-.228c-.137-.136-.182-.363-.182-.545l.455-4.184a.676.676 0 0 1 .59-.591l5.594-.819v-5.457l-5.593-.864a.725.725 0 0 1-.591-.591l-.455-4.184c0-.182.045-.41.182-.546a.73.73 0 0 1 .5-.227h19.964a.73.73 0 0 1 .5.227c.137.137.182.364.182.546l-.455 4.184a.676.676 0 0 1-.59.59l-5.594.82v5.457z" /></g></svg>;
const ForwardRef = forwardRef(IconTechIronmq);
export default ForwardRef;