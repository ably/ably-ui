import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconGuiQuoteMarksFill = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#03020D" d="M22.467 21.167a1 1 0 0 1-1 1h-6.468a1 1 0 0 1-1-1v-5.7q0-4.1.695-6.434.73-2.332 2.65-4.2 1.644-1.57 3.992-2.575c.5-.213 1.066.047 1.263.553l.405 1.046c.207.532-.076 1.124-.591 1.37-1.39.662-2.478 1.63-3.146 2.54-.65.91-1.206 2.466-1.41 4.013-.074.556.381 1.02.943 1.02h2.667a1 1 0 0 1 1 1zM9.068 21.167a1 1 0 0 1-1 1H1.6a1 1 0 0 1-1-1v-5.7q0-4.1.695-6.434.73-2.332 2.65-4.2 1.644-1.57 3.992-2.575c.5-.213 1.066.047 1.263.553l.405 1.046c.207.532-.076 1.124-.591 1.37-1.39.662-2.478 1.63-3.146 2.54-.65.91-1.206 2.466-1.41 4.013-.074.556.381 1.02.943 1.02h2.667a1 1 0 0 1 1 1z" /></svg>;
const ForwardRef = forwardRef(IconGuiQuoteMarksFill);
export default ForwardRef;