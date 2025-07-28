import react from "react";
import profileImage from '../assets/images/portfolioImage.jpeg';

export const ProfileImage = () => {
  return (
    <img
      src={profileImage}
      alt="Aishwinder_Sandhu"
      className="image-style h-full"
    />
  )
}