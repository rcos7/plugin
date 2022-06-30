import * as React from 'react';

function SvgElement2(props) {
  return (
    <svg width={30} height={30} fill="none" viewBox="0 0 30 30" {...props}>
      <path
        fill="#0DBD8B"
        fillRule="evenodd"
        d="M10.8008 1.8C10.8008.805889 11.6067 0 12.6008 0 19.2283 0 24.6009 5.37259 24.6009 12 24.6009 12.9941 23.795 13.8 22.8008 13.8 21.8067 13.8 21.0008 12.9941 21.0008 12 21.0008 7.36078 17.24 3.6 12.6008 3.6 11.6067 3.6 10.8008 2.79411 10.8008 1.8zM19.1995 28.1997C19.1995 29.1938 18.3936 29.9997 17.3995 29.9997 10.772 29.9997 5.39941 24.6272 5.39941 17.9997 5.39941 17.0056 6.2053 16.1997 7.19942 16.1997 8.19353 16.1997 8.99943 17.0056 8.99943 17.9997 8.99943 22.6389 12.7603 26.3997 17.3995 26.3997 18.3936 26.3997 19.1995 27.2056 19.1995 28.1997zM1.80001 19.2014C.805893 19.2014 4.34543e-8 18.3955 0 17.4014-2.89695e-7 10.7739 5.37261 5.40137 12.0001 5.40137 12.9942 5.40137 13.8001 6.20727 13.8001 7.20138 13.8001 8.1955 12.9942 9.00139 12.0001 9.00139 7.36087 9.00139 3.60002 12.7622 3.60002 17.4014 3.60002 18.3955 2.79413 19.2014 1.80001 19.2014zM28.2003 10.7983C29.1944 10.7983 30.0003 11.6042 30.0003 12.5983 30.0003 19.2258 24.6277 24.5983 18.0002 24.5983 17.0061 24.5983 16.2002 23.7925 16.2002 22.7983 16.2002 21.8042 17.0061 20.9983 18.0002 20.9983 22.6394 20.9983 26.4002 17.2376 26.4002 12.5983 26.4002 11.6042 27.2061 10.7983 28.2003 10.7983z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgElement2;