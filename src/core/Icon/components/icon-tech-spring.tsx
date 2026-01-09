import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconTechSpring = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="none" viewBox="0 0 48 48" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<defs><clipPath id="clip0_1031_2045"><path fill="#fff" d="M0 0h48v48H0z" /></clipPath></defs><g clipPath="url(#clip0_1031_2045)"><path fill="#68BD45" d="M43.65 2.524a22 22 0 0 1-2.564 4.548A24.071 24.071 0 1 0 7.474 41.529l.89.785a24.059 24.059 0 0 0 39.502-16.69c.656-6.127-1.143-13.882-4.215-23.1M10.898 41.669a2.059 2.059 0 1 1-3.2-2.591 2.059 2.059 0 0 1 3.2 2.59M43.55 34.46c-5.94 7.913-18.622 5.243-26.754 5.627 0 0-1.441.084-2.893.322 0 0 .548-.232 1.248-.497 5.71-1.988 8.41-2.37 11.878-4.155 6.531-3.32 12.992-10.592 14.334-18.15-2.485 7.271-10.03 13.524-16.897 16.063-4.707 1.735-13.21 3.425-13.21 3.425l-.344-.184C5.128 34.1 4.95 21.57 15.471 17.528c4.607-1.774 9.015-.8 13.99-1.987 5.314-1.262 11.46-5.243 13.962-10.437 2.797 8.31 6.168 21.316.124 29.362z" /></g></svg>;
const ForwardRef = forwardRef(IconTechSpring);
export default ForwardRef;