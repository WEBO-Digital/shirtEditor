import React, { useRef } from "react";
import { Navbar, Button } from "@blueprintjs/core";
import { observer } from "mobx-react-lite";
import DownloadToImage from "./downloadtoimage";

export const Preview = observer(({ store }) => {
  const [previewVisible, setPreviewVisible] = React.useState(true);
  const [content, setContent] = React.useState("");

  const nodeRef = useRef();

  const updateContent = async () => {
    setContent(await store.toDataURL({ ignoreBackground: true }));
  };

  React.useEffect(() => {
    // when loading for all fonts
    store.waitLoading().then(updateContent);
    store.on("change", updateContent);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: 0,
        zIndex: 10,
        zIndex: 10000,
        transformOrigin: "top left",
        background: "white",
        border: "1px solid rgba(16, 22, 26, 0.2)",
        borderRadius: "5px",
        overflow: "hidden",
      }}
    >
      <Navbar>
        <Navbar.Group align="right">
          {previewVisible && (
            <Button
              icon="eye-off"
              minimal
              onClick={() => {
                setPreviewVisible(false);
              }}
            >
              Hide preview
            </Button>
          )}
          {!previewVisible && (
            <Button
              icon="eye-on"
              minimal
              onClick={() => {
                setPreviewVisible(true);
              }}
            >
              Show preview
            </Button>
          )}
        </Navbar.Group>
      </Navbar>
      <div
        ref={nodeRef}
        className="preview-container"
        style={{
          display: previewVisible ? "" : "none",
          position: "relative",
        }}
      >
        <img src="./tshirt.png" style={{ maxWidth: "300px" }} />
        <img
          src={content}
          style={{
            position: "absolute",
            top: "80px",
            left: "100px",
            width: "100px",
          }}
        />
      </div>
      <DownloadToImage node={nodeRef} />
    </div>
  );
});
