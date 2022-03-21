import React from "react";
import { useState } from "react";
import { useModal } from "@clayui/modal";
import ClayForm, { ClayInput } from "@clayui/form";
import ClayButton from "@clayui/button";
import { fetchPostImage } from "../../services/request";

import ClayModal from "@clayui/modal";

export const DocumentAndMediaComponent = () => {
  const [visible, setVisible] = useState(false);
  const { observer, onClose } = useModal({
    onClose: () => setVisible(false),
  });

  return (
    <>
      {visible && (
        <ClayModal
          observer={observer}
          size="lg"
          status="info"
        >
          <ClayModal.Header>{"Documents and Media Request"}</ClayModal.Header>
          <ClayModal.Body>
            <h1>Documents and Media - POST</h1>
            <ClayForm.Group>
              <ClayInput.Group>
                <input type="file" id="file-selector" name="img"></input>
                <ClayInput.GroupItem append shrink>
                  <ClayButton
                    onClick={() => fetchPostImage()}
                    displayType="secondary"
                    type="submit"
                  >
                    Submit
                  </ClayButton>
                </ClayInput.GroupItem>
              </ClayInput.Group>
            </ClayForm.Group>
          </ClayModal.Body>
          <ClayModal.Footer
            last={<ClayButton onClick={onClose}>{"CLOSE"}</ClayButton>}
          />
        </ClayModal>
      )}
      <ClayButton className="buttonDocuments" displayType="primary" onClick={() => setVisible(true)}>
        {"Documents and Media Request's"}
      </ClayButton>
    </>
  );
};
