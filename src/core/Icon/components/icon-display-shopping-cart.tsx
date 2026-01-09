import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconDisplayShoppingCart = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="none" viewBox="0 0 48 48" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<defs><clipPath id="clip0"><path fill="#fff" d="M0 0h48v48H0z" /></clipPath></defs><g clipPath="url(#clip0)"><path fill="currentColor" fillRule="evenodd" d="M1 6.25a.75.75 0 0 0 0 1.5h.392a3.25 3.25 0 0 1 3.149 2.447l5.699 22.358a2.75 2.75 0 0 0 1.26 5.195H42a.75.75 0 0 0 0-1.5H11.5a1.25 1.25 0 1 1 0-2.5h26.307a6.75 6.75 0 0 0 6.524-5.017l3.726-14.027A2.75 2.75 0 0 0 45.4 11.25H6.357l-.362-1.423A4.75 4.75 0 0 0 1.392 6.25zm5.74 6.5 4.97 19.5h26.097a5.25 5.25 0 0 0 5.075-3.902l3.726-14.027a1.25 1.25 0 0 0-1.209-1.571zM15 43.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m0 1.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6m23.5-3a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m1.5 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0" clipRule="evenodd" /></g></svg>;
const ForwardRef = forwardRef(IconDisplayShoppingCart);
export default ForwardRef;