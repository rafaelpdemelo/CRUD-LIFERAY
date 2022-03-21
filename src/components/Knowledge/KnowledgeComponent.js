import React from "react";
import { useState } from "react";
import { useModal } from "@clayui/modal";
import ClayForm, { ClayInput } from "@clayui/form";
import ClayButton from "@clayui/button";
import ClayModal from "@clayui/modal";
import ClayTabs from "@clayui/tabs";

import { postKnowledge, getKnowledge, deleteKnowledge } from "../../services/request";

export const KnowledgeComponent = () => {
const [activeTabKeyValue, setActiveTabKeyValue] = useState(0);
  const [visible, setVisible] = useState(false);
  const { observer, onClose } = useModal({
    onClose: () => setVisible(false),
  });

  return (
    <>
      {visible && (
        <ClayModal observer={observer} size="lg" status="info">
          <ClayModal.Header>{"Knowledge Request's"}</ClayModal.Header>
          <ClayModal.Body>
            <ClayTabs modern>
              <ClayTabs.Item
                active={activeTabKeyValue === 0}
                innerProps={{
                  "aria-controls": "tabpanel-1",
                }}
                onClick={() => setActiveTabKeyValue(0)}
              >
                {"GET"}
              </ClayTabs.Item>
              <ClayTabs.Item
                active={activeTabKeyValue === 1}
                innerProps={{
                  "aria-controls": "tabpanel-2",
                }}
                onClick={() => setActiveTabKeyValue(1)}
              >
                {"POST"}
              </ClayTabs.Item>
              <ClayTabs.Item
                active={activeTabKeyValue === 2}
                innerProps={{
                  "aria-controls": "tabpanel-3",
                }}
                onClick={() => setActiveTabKeyValue(2)}
              >
                {"DELETE"}
              </ClayTabs.Item>
            </ClayTabs>
            <ClayTabs.Content activeIndex={activeTabKeyValue} fade>
              <ClayTabs.TabPane aria-labelledby="tab-1">
                {<ClayButton onClick={() => getKnowledge()}>GET</ClayButton>}
              </ClayTabs.TabPane>
              <ClayTabs.TabPane aria-labelledby="tab-2">
                {
                  <ClayInput
                    id="articleBodyPostNew"
                    placeholder="articleBody"
                    type="text"
                  ></ClayInput>
                }
                {
                  <ClayInput
                    id="titlePost"
                    placeholder="Title"
                    type="text"
                  ></ClayInput>
                }
                {
                  <ClayButton
                    id="fetchButton"
                    onClick={() => postKnowledge()}
                    displayType="primary"
                  >
                    POST
                  </ClayButton>
                }
              </ClayTabs.TabPane>
              <ClayTabs.TabPane aria-labelledby="tab-3">
              {<ClayInput
              id="deleteKnowledge"
              placeholder="Delete Post"
              type="text"
            ></ClayInput>}
            {<ClayButton id="fetchButton" onClick={() => deleteKnowledge()} displayType="primary">
              DELETE
            </ClayButton>}
              </ClayTabs.TabPane>
            </ClayTabs.Content>
          </ClayModal.Body>
          <ClayModal.Footer
            last={<ClayButton onClick={onClose}>{"CLOSE"}</ClayButton>}
          />
        </ClayModal>
      )}
      <ClayButton
        className="buttonDocuments"
        displayType="primary"
        onClick={() => setVisible(true)}
      >
        {"Knowledge Request's"}
      </ClayButton>
    </>
  );
};
