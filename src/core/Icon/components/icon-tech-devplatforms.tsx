import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconTechDevplatforms = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="none" viewBox="0 0 48 48" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#03020D" fillRule="evenodd" d="M32 15a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v23a3 3 0 0 1-3 3H35a3 3 0 0 1-3-3zm3-1a1 1 0 0 0-1 1v23a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V15a1 1 0 0 0-1-1z" clipRule="evenodd" /><path fill="#03020D" fillRule="evenodd" d="M44 36a1 1 0 0 1-1 1h-6a1 1 0 1 1 0-2h6a1 1 0 0 1 1 1" clipRule="evenodd" /><circle cx={40} cy={16} r={1} fill="#03020D" /><path fill="#000" fillRule="evenodd" d="M38 4H6a4 4 0 0 0-4 4v21h31v2H2v1a4 4 0 0 0 4 4h27v2h-4.03l.002.067c0 1.09.088 2.609.46 3.572.08.207.312.518.78.911.451.378 1.04.763 1.707 1.139 1.008.567 1.188 1.71 1.025 2.5-.162.79-.802 1.811-2.033 1.811H12.367c-1.182 0-1.839-.938-2.013-1.726-.174-.786.018-1.879.99-2.44.702-.405 1.343-.824 1.843-1.234.522-.428.797-.77.895-.997.43-.995.685-2.525.815-3.603H6a6 6 0 0 1-6-6V8a6 6 0 0 1 6-6h32a6 6 0 0 1 6 6v5h-2V8a4 4 0 0 0-4-4M16.936 38h9.999q.005.001.014.01a.08.08 0 0 1 .023.056c0 1.088.075 2.947.595 4.294.261.676.799 1.252 1.361 1.723.58.486 1.285.94 2.01 1.349l.01.01a.2.2 0 0 1 .028.054.6.6 0 0 1 .009.291.5.5 0 0 1-.094.213H12.38a.36.36 0 0 1-.072-.159.44.44 0 0 1 .005-.225c.013-.039.025-.046.031-.05.752-.433 1.495-.914 2.112-1.42.595-.487 1.172-1.076 1.463-1.749.586-1.354.865-3.274.988-4.352a.06.06 0 0 1 .018-.038l.01-.007z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(IconTechDevplatforms);
export default ForwardRef;