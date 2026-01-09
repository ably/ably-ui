import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconTechXamarin = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="none" viewBox="0 0 48 48" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<defs><clipPath id="clip0_1031_1957"><path fill="#fff" d="M0 0h48v48H0z" /></clipPath></defs><g clipPath="url(#clip0_1031_1957)"><path fill="#3498DB" d="M13.85 3c-1.296.003-2.565.739-3.218 1.861L.482 22.493a3.84 3.84 0 0 0 0 3.723l10.15 17.631c.652 1.123 1.922 1.86 3.218 1.862h20.3c1.297-.003 2.566-.739 3.218-1.862l10.15-17.632a3.84 3.84 0 0 0 0-3.722L37.368 4.861C36.715 3.74 35.446 3.003 34.15 3zm.184 10.315a.4.4 0 0 1 .085 0h3.502a.46.46 0 0 1 .383.227l5.94 10.585q.045.079.056.17a.5.5 0 0 1 .056-.17l5.926-10.585a.46.46 0 0 1 .397-.227h3.501c.31.003.543.393.397.668L28.48 24.354l5.798 10.358c.16.276-.078.684-.397.682H30.38a.46.46 0 0 1-.397-.242l-5.926-10.585a.5.5 0 0 1-.056-.17.5.5 0 0 1-.057.17l-5.94 10.585a.46.46 0 0 1-.382.242h-3.502c-.318.003-.556-.406-.397-.682l5.798-10.358-5.798-10.371c-.139-.25.03-.615.312-.668" /></g></svg>;
const ForwardRef = forwardRef(IconTechXamarin);
export default ForwardRef;