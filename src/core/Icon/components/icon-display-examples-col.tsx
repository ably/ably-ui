import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconDisplayExamplesCol = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="none" viewBox="0 0 48 48" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<rect width={19.5} height={19.5} x={2.75} y={2.75} stroke="#03020D" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} rx={3.25} /><rect width={19.5} height={19.5} x={25.75} y={2.75} stroke="#03020D" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} rx={3.25} /><path fill="#FF5416" d="M29.948 7.492a.75.75 0 0 1 .807-.197l10.5 3.794a.75.75 0 0 1 .053 1.389l-4.131 1.863-1.383 3.91a.75.75 0 0 1-1.389.062l-4.587-10a.75.75 0 0 1 .13-.82" /><rect width={42.5} height={19.5} x={2.75} y={25.75} stroke="#03020D" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} rx={3.25} /><path fill="#FF5416" fillRule="evenodd" d="M29.25 35.5a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0" clipRule="evenodd" /><path stroke="#03020D" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M28 31.112a4.5 4.5 0 1 0 0 8.777" /><path stroke="#03020D" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M22.75 32.388a4.5 4.5 0 1 0 0 6.225" /><path stroke="#03020D" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 32.388a4.5 4.5 0 1 0 0 6.225" /><path fill="#FF5416" fillRule="evenodd" d="m5.769 16.326-.013 1.541-.006.626a.75.75 0 0 0 .75.757h6.019c3.72 0 6.731-3.024 6.731-6.75s-3.012-6.75-6.731-6.75c-3.72 0-6.732 3.024-6.732 6.75 0 1.105-.009 2.603-.018 3.826M9.25 11.5a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75m0 2.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(IconDisplayExamplesCol);
export default ForwardRef;