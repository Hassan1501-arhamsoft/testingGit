import { useEffect, useState } from "react";
import { profileService } from "../services/ProfileService";

const useProfile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Load Profile
  const loadProfile = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await profileService.getProfile();

      setProfile(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Upload / Update Profile Image
  const uploadProfileImage = async (file) => {
    try {
      setLoading(true);
      setError("");

      const response = await profileService.uploadProfileImage(file);

      setProfile(response.data);

      return response;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProfile();
  }, []);

  return {
    profile,
    loading,
    error,
    uploadProfileImage,
    loadProfile,
  };
};

export default useProfile;