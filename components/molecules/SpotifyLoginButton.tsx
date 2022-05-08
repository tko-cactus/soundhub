import { PrimaryLoginButton } from "./PrimaryLoginButton";

export const SpotifyLoginButton = () => {
  return (
    <>
      <PrimaryLoginButton
        logoSrcUrl="/spotify_logo_white.png"
        buttonColor="#1DB954"
        onClick={() => alert("Spotify Login")}
      />
    </>
  );
};
