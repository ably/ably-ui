import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconTechAzureservicebus = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="none" viewBox="0 0 48 48" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<defs><clipPath id="clip0_1031_1897"><path fill="#fff" d="M0 0h48v48H0z" /></clipPath></defs><g clipPath="url(#clip0_1031_1897)"><path fill="#0072C6" fillRule="evenodd" d="M12.075 17.27 26.225 5 10.887 38.945H0zm9.994 7.622 6.039-17.021L48 43.3H11.184l22.464-3.86z" clipRule="evenodd" /></g></svg>;
const ForwardRef = forwardRef(IconTechAzureservicebus);
export default ForwardRef;