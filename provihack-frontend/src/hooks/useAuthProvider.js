import { useState } from "react";

function useAuthProvider() {
  const [token, setToken] = useState(true);
  return { token };
}

export default useAuthProvider;
