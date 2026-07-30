import { useState } from "react";
import useProfile from "../hooks/useProfile";
import ProfileCard from "../components/ProfileCard";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/common/Button/Button";
import "../style/profilePage.css";
function ProfilePage() {
    const navigate = useNavigate();
  const {
    profile,
    loading,
    error,
    uploadProfileImage,
  } = useProfile();

  const [selectedFile, setSelectedFile] = useState(null);

  // Select Image
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  // Upload Image
  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select an image.");
      return;
    }

    try {
      await uploadProfileImage(selectedFile);

      alert("Profile image updated successfully.");

      setSelectedFile(null);
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div>
      <ProfileCard profile={profile} />

      <div className="upload-section">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />

        <br />
        <br />

        <Button onClick={handleUpload}>
          Upload Image
        </Button>
        <Button onClick={() => navigate("/dashboard")}>
    ← Back to Dashboard
    </Button>
      </div>
    </div>
  );
}

export default ProfilePage;