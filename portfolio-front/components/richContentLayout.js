import styles from "../styles/components/RichContentLayout.module.scss";
import ReactMarkdown from "react-markdown";
import { ToastContainer, toast } from "react-toastify";
import { getStrapiURL } from "../lib/api";

import "react-toastify/dist/ReactToastify.css";

export default function RichContentLayout({ content }) {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>{content.title}</h1>
        <div className={styles.body}>
          <ReactMarkdown
            children={content.body}
            transformImageUri={(src) => getStrapiURL(src)}
          />
        </div>
        <button
          className={["outline", styles.link].join(" ")}
          onClick={shareAction}
        >
          share
        </button>
      </div>
      <ToastContainer
        position="bottom-left"
        theme="dark"
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        closeButton={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

function shareAction() {
  navigator.clipboard.writeText(window.location);
  toast.success("📋 Link sent to clipboard!");
}
