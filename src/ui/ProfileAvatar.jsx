import React from "react";

const ProfileAvatar = ({ url, fname, lname, size, font }) => {
  const firstLetter = fname?.charAt(0);
  const lastLetter = lname?.charAt(0);
  if (url) {
    return (
      <img
        src={url}
        alt="profile"
        width={size}
        height={size}
        className="circle aspect-square"
      />
    );
  } else
    return (
      <>
        <div
        className="rounded-full flex gap-x-[1px] !justify-center items-center fw-600 bg-blue-500 text-white"
        style={{ width: size, height: size }}
      >
        <p style={{ fontSize: font }} className="uppercase !p-0 !w-auto">
          {firstLetter}
        </p>
        <p style={{ fontSize: font }} className="uppercase !p-0 !w-auto">
          {lastLetter}
        </p>
      </div>
      </>
    );
};

export default ProfileAvatar;