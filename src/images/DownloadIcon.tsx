import React, { FC, SVGProps } from 'react';

export const DownloadIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <>
      <svg
        width="25"
        height="27"
        viewBox="0 0 25 27"
        fill="none"
        cursor="pointer"
        {...props}
      >
        <path d="M0 26H12.5H25" stroke="black" strokeWidth="1.5" />
        <path
          d="M13 21.5V0.5M13 21.5L8.5 17M13 21.5L17.5 17"
          stroke="black"
          strokeWidth="1.5"
        />
      </svg>
    </>
  );
};
