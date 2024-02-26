import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../src/assets/css/style.css';
import '../src/assets/css/media.css';
// import 'react-toastify/dist/ReactToastify.css';
import { Provider } from "react-redux";
// import { ToastContainer } from 'react-toastify';
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "@/src/store/store";
import MainLayout from '@/src/layouts';

export default function MyApp({ Component, pageProps }: any) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* <ToastContainer /> */}
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </PersistGate>
    </Provider>
  )
}