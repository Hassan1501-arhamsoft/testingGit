import "./ProfileCard.css"
import defaultAvatar from "../../../assets/download.jpeg";
function ProfileCard({ profile }) {
  if (!profile) return null;

  const imageUrl = profile.profileImage
    ? `http://localhost:5000/${profile.profileImage}`
    : defaultAvatar;

  return (
    <div className="profile-card">
      <img
        src={imageUrl}
        alt={profile.name}
        className="profile-image"
      />

      <h2>{profile.name}</h2>

      <p>{profile.email}</p>
      <p>{profile.role}</p>

    </div>
  );
}

export default ProfileCard;