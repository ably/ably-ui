import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconDisplayCompareTechCol = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={41} height={41} fill="none" viewBox="0 0 41 41" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path stroke="#03020D" strokeLinecap="round" strokeWidth={1.5} d="M13.417 36.626v-2.5c0-.833.833-1.667 1.667-1.667h10c.833 0 1.666.834 1.666 1.667v2.5M21.762 29.208v2.917M18.423 29.207l.067 2.918" /><path fill="#FF5416" fillRule="evenodd" d="m10.077 14.369.004.013.02.069a93 93 0 0 0 .375 1.225c.249.802.595 1.887.98 3.02.386 1.133.81 2.308 1.215 3.294.416 1.013.781 1.744 1.037 2.056 3.306 4.032 9.757 4.167 12.723.031.25-.35.597-1.107.986-2.123.38-.992.777-2.165 1.138-3.292a133 133 0 0 0 1.193-3.942l.074-.262.02-.068.004-.017v-.002l.001-.001v-.002l.001-.002.02-.07a125 125 0 0 0 .265-1 153 153 0 0 0 .63-2.485c.23-.94.458-1.923.629-2.765.174-.864.275-1.52.275-1.84 0-.555-.287-1.163-.776-1.645s-1.109-.77-1.68-.77h-18.42c-.572 0-1.192.288-1.68.77-.49.482-.777 1.09-.777 1.644 0 .31.097.96.265 1.823.163.841.382 1.826.602 2.77a167 167 0 0 0 .803 3.287l.056.218z" clipRule="evenodd" /><path stroke="#03020D" strokeLinecap="round" strokeWidth={1.5} d="M6.25 8.876H5.178c-1.658 0-3.286 1.582-2.452 4.499l1.79 5.871c.497 1.482 1.74 2.963 3.398 2.963H10M33.75 8.876h1.298c1.658 0 3.286 1.582 2.453 4.499l-1.79 5.871c-.497 1.482-1.74 2.963-3.399 2.963H30" /><path fill="#fff" fillRule="evenodd" d="m14.654 17.507 5.418-9.787H18.61l-5.013 9.056zm10.911 0L20.147 7.72h1.462l2.506 4.528 2.507 4.528zm-5.456-4.1 5.38 4.158-1.097.758-4.283-3.308-4.282 3.308-1.098-.758z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(IconDisplayCompareTechCol);
export default ForwardRef;