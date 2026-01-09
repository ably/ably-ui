import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconDisplayItSupportAccess = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="none" viewBox="0 0 48 48" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="currentColor" fillRule="evenodd" d="M46.5 40V12.75h-45V40a.5.5 0 0 0 .5.5h44a.5.5 0 0 0 .5-.5m0-32v3.25h-45V8a.5.5 0 0 1 .5-.5h44a.5.5 0 0 1 .5.5M48 8v32a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h44a2 2 0 0 1 2 2M4.25 9.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0m2 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2m4-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0m14.5 20.55a1.5 1.5 0 1 0-1.5 0v3.7h1.5zM17 24.25a.75.75 0 0 0-.75.75v5.242c0 .826 0 2.434.765 3.843a4.67 4.67 0 0 0 1.902 1.902c.893.486 2.034.763 3.478.763h3.21c1.443 0 2.584-.275 3.477-.76a4.66 4.66 0 0 0 1.903-1.9c.766-1.409.765-3.023.765-3.867V25a.75.75 0 0 0-.75-.75h-1.25v-3.066c0-1.802-.639-3.097-1.776-3.908C26.885 16.5 25.45 16.25 24 16.25c-1.452 0-2.887.255-3.975 1.033-1.135.812-1.775 2.107-1.775 3.901v3.066zm11.25-3.066v3.066h-8.5v-3.066c0-1.402.475-2.2 1.147-2.68.72-.515 1.784-.754 3.103-.754 1.321 0 2.386.236 3.104.748.67.478 1.146 1.274 1.146 2.686M29 25.75H17.75v4.455c0 .851.012 2.113.583 3.164.276.506.683.964 1.302 1.301.624.34 1.506.58 2.76.58h3.21c1.255 0 2.137-.239 2.761-.578a3.16 3.16 0 0 0 1.3-1.298c.572-1.05.584-2.317.584-3.19V25.75z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(IconDisplayItSupportAccess);
export default ForwardRef;