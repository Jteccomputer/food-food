import Header from "./components/Header/Header";
import AppRoutes from "./AppRoutes";
import Loading from "./components/Loading/Loading";

import { useLoading } from "./hooks/useLoading";

import { setLoadingInterceptor} from "./interceptors/loadingInterceptor";

import { useEffect } from "react";


export default function App() {
  const { showLoading, hideLoading} = useLoading();

  useEffect(() => {
      setLoadingInterceptor({ showLoading, hideLoading});
  }, []);

  return (
    <>
      <Loading />
      <Header/>
      <AppRoutes />
    </>
  );

};

