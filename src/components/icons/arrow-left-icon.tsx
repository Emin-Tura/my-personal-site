import React from "react";
import type { ISVGProps } from "@/types";

export default function IconArrowLeft({ size = 24, ...props }: ISVGProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      clip-rule="evenodd"
      viewBox="0 0 48 48"
      width={size}
      height={size}
      {...props}
    >
      <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm3 5.753l-6.44 5.247 6.44 5.263-.678.737-7.322-6 7.335-6 .665.753z" />
    </svg>
  );
}