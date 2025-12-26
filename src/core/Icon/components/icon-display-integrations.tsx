import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconDisplayIntegrations = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={60} height={60} fill="none" viewBox="0 0 60 60" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path stroke="#C6CED9" strokeLinejoin="round" strokeWidth={1.5} d="M13.7 13.696c-4.296 4.295-4.514 11.042-.488 15.069l4.73 4.73L33.5 17.938l-4.73-4.73c-4.027-4.026-10.773-3.808-15.07.488Z" /><path stroke="#FF5416" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m51.213 51.209-6.829-6.829" /><path fill="#FF5416" fillRule="evenodd" d="M46.451 46.446c-4.555 4.556-11.778 4.84-16.13.488l-4.73-4.73a.75.75 0 0 1 0-1.06l15.557-15.557a.75.75 0 0 1 1.06 0l4.73 4.73c4.352 4.351 4.07 11.574-.487 16.13" clipRule="evenodd" /><path stroke="#C6CED9" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m8.786 8.782 4.95 4.95M29.293 22.217l4.95 4.95M22.222 29.288l4.95 4.95" /></svg>;
const ForwardRef = forwardRef(IconDisplayIntegrations);
export default ForwardRef;