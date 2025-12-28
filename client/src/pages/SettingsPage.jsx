import { useEffect } from "react";

const SettingsPage = () => {
  useEffect(() => {
    document.title = "Chatty | Settings";
  }, []);

  return <div>SettingsPage</div>;
};

export default SettingsPage;
