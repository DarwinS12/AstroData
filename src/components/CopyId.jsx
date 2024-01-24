import { LuClipboardCopy, LuCopyCheck } from "react-icons/lu";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";
import toast from "react-hot-toast";

export function CopyId({ idReference }) {
  const [hasCopy, setHasCopy] = useState(false);

  const handleCopy = () => {
    toast("The Neo reference ID has been copied");
    setHasCopy(!hasCopy);
  };

  return (
    <>
      {hasCopy ? (
        <CopyToClipboard text={idReference.neo_reference_id}>
          <LuCopyCheck
            className="iconCopy"
            onClick={() => toast("This is already copied")}
            size={25}
          />
        </CopyToClipboard>
      ) : (
        <CopyToClipboard text={idReference.neo_reference_id}>
          <LuClipboardCopy
            className="iconCoopy"
            onClick={handleCopy}
            size={25}
          />
        </CopyToClipboard>
      )}
    </>
  );
}
