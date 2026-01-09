import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconTechFirebase = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="none" viewBox="0 0 48 48" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<defs><clipPath id="clip0_1031_2016"><path fill="#fff" d="M0 0h48v48H0z" /></clipPath></defs><g clipPath="url(#clip0_1031_2016)"><path fill="#FFA000" d="M24.918 7.643c-.585-1.034-1.522-1.05-2.122 0l-2.309 5.173 4.454 8.99 4.805-4.47z" /><path fill="#F57F17" d="m7 38.494 17.948-16.696-4.453-8.99z" /><path fill="#FFCA28" d="m7 38.494 15.369 9.056c.502.293 1.807.45 1.807.45s1.44-.127 1.98-.427l15.488-9.297-4.67-27.147c-.225-1.17-1.118-1.447-1.972-.622z" /><path fill="#FFA000" d="M14.49.708c-.593-1.034-1.26-.922-1.477.248L7 38.494l13.487-25.685z" /></g></svg>;
const ForwardRef = forwardRef(IconTechFirebase);
export default ForwardRef;