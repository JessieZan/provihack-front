import { useState } from "react";
import { useLocalStorage } from "react-use";

const useGlobalProvider = () => {
  const [token, setToken, removeToken] = useLocalStorage("token", "");
  const [loading, setLoading] = useState(false);
  const [services, setServices] = useState([]);
  const [category, setCategory] = useState("");

  return {
    token,
    setToken,
    removeToken,
    loading,
    setLoading,
    services,
    setServices,
    category,
    setCategory,
  };
};

export default useGlobalProvider;
