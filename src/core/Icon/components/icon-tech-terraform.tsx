import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconTechTerraform = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="none" viewBox="0 0 48 48" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#7A50BA" d="M32.04 16.04v15.144l13.083-7.568V8.456zM17.52 8.456l13.083 7.584v15.144L17.52 23.608zM3 0v15.152l13.084 7.576V7.576zm14.52 40.424L30.603 48V32.848L17.52 25.272z" /></svg>;
const ForwardRef = forwardRef(IconTechTerraform);
export default ForwardRef;