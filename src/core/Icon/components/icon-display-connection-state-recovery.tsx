import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconDisplayConnectionStateRecovery = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={48} height={49} fill="none" viewBox="0 0 48 49" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#C6CED9" d="M2.991 30.052a.75.75 0 1 0 1.449-.388zM18.565 4.138l-.194-.724zm22.616 9.135a.75.75 0 0 0 .875-.6l1.234-6.637a.75.75 0 1 0-1.475-.274l-1.097 5.9-5.899-1.098a.75.75 0 0 0-.274 1.475zM4.44 29.664C1.545 18.861 7.956 7.758 18.759 4.863l-.388-1.449C6.768 6.523-.118 18.45 2.99 30.052zM18.759 4.863C27.274 2.58 35.979 6.082 40.7 12.96l1.237-.849C36.867 4.725 27.519.963 18.37 3.414zM45.009 18.793a.75.75 0 1 0-1.449.388zM29.435 44.707l.194.724zM6.82 35.572a.75.75 0 0 0-.875.6L4.71 42.81a.75.75 0 1 0 1.475.274l1.097-5.899 5.899 1.097a.75.75 0 0 0 .274-1.475zm36.741-16.39c2.895 10.802-3.516 21.906-14.319 24.8l.388 1.45c11.603-3.11 18.489-15.036 15.38-26.639zm-14.319 24.8c-8.515 2.282-17.22-1.218-21.941-8.097l-1.237.85c5.07 7.385 14.418 11.148 23.566 8.696z" /><path stroke="#FF5416" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m15 25.59 7.2 5.833 10.8-14" /></svg>;
const ForwardRef = forwardRef(IconDisplayConnectionStateRecovery);
export default ForwardRef;