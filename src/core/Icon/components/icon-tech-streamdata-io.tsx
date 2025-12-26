import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconTechStreamdataIo = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="none" viewBox="0 0 48 48" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<defs><clipPath id="clip0_1031_2017"><path fill="#fff" d="M0 48V0h48v48z" /></clipPath></defs><g clipPath="url(#clip0_1031_2017)"><path fill="#E82C2A" fillRule="evenodd" d="M46.458 31.907 8.19 14.09v6.45l30.464 14.182zm-33.727-6.032v6.448l6.958 3.224L8.495 47.146h7.422l13.284-13.608zm33.716-6.859.014 9.679L3 8.45V2l38.027 17.724V10.04L51 14.683v6.454z" clipRule="evenodd" /></g></svg>;
const ForwardRef = forwardRef(IconTechStreamdataIo);
export default ForwardRef;