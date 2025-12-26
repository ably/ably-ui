import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconTechSockjs = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="none" viewBox="0 0 48 48" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<defs><clipPath id="clip0_1031_2024"><path fill="#fff" d="M0 0h48v48H0z" /></clipPath></defs><g clipPath="url(#clip0_1031_2024)"><path fill="#03020D" d="M22.415.071C14.466 1.128 10.848 5.227 9.323 7.897a.95.95 0 0 0 .135 1.108C12.95 12.859 19.588 20.322 21.5 23c3.364 4.71 1.5 7.5 1 9s-2 6-3.5 7.5-6 .5-6.5 3c-.392 1.961 1.475 5.5 6.5 5.5 6 0 9.16-3.652 10.5-7 2-5 6.5-6.5 9-10.5s-4.625-8.5-6.5-11C30.203 17.104 25.878 4.598 23.32.484a.92.92 0 0 0-.905-.413" /></g></svg>;
const ForwardRef = forwardRef(IconTechSockjs);
export default ForwardRef;