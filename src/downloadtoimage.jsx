import html2canvas from "html2canvas";
import { Button } from "@blueprintjs/core";

const DownloadToImage = ({ node }) => {
  function downloadimage() {
    html2canvas(node?.current, {
      allowTaint: true,
      backgroundColor: null,
      scale: 2,
    }).then(function (canvas) {
      var link = document.createElement("a");
      document.body.appendChild(link);
      link.download = "preview.png";
      link.href = canvas.toDataURL();
      link.target = "_blank";
      link.click();
    });
  }

  return (
    <Button icon="download" minimal onClick={downloadimage}>
      Download image now
    </Button>
  );
};
export default DownloadToImage;
