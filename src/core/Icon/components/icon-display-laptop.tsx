import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconDisplayLaptop = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="none" viewBox="0 0 48 48" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<defs><clipPath id="clip0"><path fill="#fff" d="M0 0h48v48H0z" /></clipPath></defs><g clipPath="url(#clip0)"><path fill="currentColor" fillRule="evenodd" d="M7 8.75c-.69 0-1.25.56-1.25 1.25v24h11.345a2 2 0 0 1 1.167.376l1.041.748a2 2 0 0 0 1.167.376h7.06a2 2 0 0 0 1.167-.376l1.04-.748A2 2 0 0 1 30.906 34H42.25V10c0-.69-.56-1.25-1.25-1.25zM4.25 10v24H1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h46a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-3.25V10A2.75 2.75 0 0 0 41 7.25H7A2.75 2.75 0 0 0 4.25 10M46.5 35.5H30.905a.5.5 0 0 0-.292.094l-1.04.748A3.5 3.5 0 0 1 27.53 37h-7.06a3.5 3.5 0 0 1-2.043-.658l-1.04-.748a.5.5 0 0 0-.292-.094H1.5v2h45zM25 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0" clipRule="evenodd" /></g></svg>;
const ForwardRef = forwardRef(IconDisplayLaptop);
export default ForwardRef;