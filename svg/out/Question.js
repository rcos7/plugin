import * as React from 'react';

function SvgQuestion(props) {
  return (
    <svg width={30} height={30} fill="none" viewBox="0 0 30 30" {...props}>
      <path d="M30 15C30 23.2861 23.2837 30 15 30C6.71631 30 0 23.2861 0 15C0 6.71873 6.71631 0 15 0C23.2837 0 30 6.71873 30 15ZM15.4025 4.95968C12.1063 4.95968 10.004 6.34821 8.35319 8.81601C8.13931 9.13573 8.21087 9.56692 8.5174 9.79935L10.6161 11.3907C10.9309 11.6294 11.3795 11.5726 11.6241 11.2623C12.7046 9.89189 13.4454 9.0972 15.09 9.0972C16.3256 9.0972 17.854 9.89244 17.854 11.0906C17.854 11.9964 17.1062 12.4616 15.8862 13.1456C14.4634 13.9432 12.5806 14.9359 12.5806 17.4194V17.6613C12.5806 18.0621 12.9056 18.3871 13.3065 18.3871H16.6935C17.0944 18.3871 17.4194 18.0621 17.4194 17.6613V17.5807C17.4194 15.8592 22.4508 15.7875 22.4508 11.129C22.4508 7.62085 18.8118 4.95968 15.4025 4.95968ZM15 19.9597C13.4658 19.9597 12.2177 21.2078 12.2177 22.7419C12.2177 24.276 13.4658 25.5242 15 25.5242C16.5342 25.5242 17.7823 24.276 17.7823 22.7419C17.7823 21.2078 16.5342 19.9597 15 19.9597Z" />
    </svg>
  );
}

export default SvgQuestion;