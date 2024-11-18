import Header from "../layout/Header/header";
import Footer from "../layout/Footer/footer";
import { useAuth } from "../../context/Context";
function DefaultLayout({ children }) {
 const { isLoading } = useAuth();
//  console.log(isLoading);
  return (
    <>
      <div className="w-full bg-f8fafc fixed top-0 border-b border-b-e2e8f0  px-40px  z-999  ">
        <Header />
      </div>
      <div className="mt-[84px] mb-[13px]">
        {isLoading ? (
          <div class="flex space-x-2 justify-center items-center bg-white h-screen z-999 dark:invert">
            <span class="sr-only">Loading...</span>
            <div class="h-4 w-4 bg-black rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div class="h-4 w-4 bg-black rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div class="h-4 w-4 bg-black rounded-full animate-bounce"></div>
          </div>
        ) : (
          children
        )}
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
export default DefaultLayout;
