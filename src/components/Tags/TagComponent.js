import React, { useState } from "react";
import ClayTabs from "@clayui/tabs";
import ClayButton from "@clayui/button";
import ClayModal, { useModal } from "@clayui/modal";
import ClayForm, { ClayInput } from "@clayui/form";
import {
  deleteFunction,
  getByIdFunction,
  getFunction,
  postFunction,
} from "../../services/request";

export const TagComponent = () => {
  const [activeTabKeyValue, setActiveTabKeyValue] = useState(0);
  const [visible, setVisible] = useState(false);
  const { observer, onClose } = useModal({
    onClose: () => setVisible(false),
  });

  return (
    <>
      {visible && (
        <ClayModal observer={observer} size="lg" status="info">
          <ClayModal.Header>{"Blog Request's"}</ClayModal.Header>
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
              <ClayTabs.Item
                active={activeTabKeyValue === 3}
                innerProps={{
                  "aria-controls": "tabpanel-4",
                }}
                onClick={() => setActiveTabKeyValue(3)}
              >
                {"GET BY ID"}
              </ClayTabs.Item>
            </ClayTabs>
            <ClayTabs.Content activeIndex={activeTabKeyValue} fade>
              <ClayTabs.TabPane aria-labelledby="tab-1">
                {
                  <ClayButton
                    id="fetchButton"
                    onClick={() => getFunction()}
                    displayType="primary"
                  >
                    GET
                  </ClayButton>
                }
              </ClayTabs.TabPane>
              <ClayTabs.TabPane aria-labelledby="tab-2">
                {
                  <ClayInput
                    id="articleBodyPost"
                    placeholder="articleBody"
                    type="text"
                  ></ClayInput>
                }
                {
                  <ClayInput
                    id="headlinePost"
                    placeholder="headline"
                    type="text"
                  ></ClayInput>
                }
                {
                  <ClayButton
                    id="fetchButton"
                    onClick={() => postFunction()}
                    displayType="primary"
                  >
                    POST
                  </ClayButton>
                }
              </ClayTabs.TabPane>
              <ClayTabs.TabPane aria-labelledby="tab-3">
                {
                  <ClayInput
                    id="deletePost"
                    placeholder="Delete Post"
                    type="text"
                  ></ClayInput>
                }
                {
                  <ClayButton
                    id="fetchButton"
                    onClick={() => deleteFunction()}
                    displayType="primary"
                  >
                    DELETE
                  </ClayButton>
                }
              </ClayTabs.TabPane>
              <ClayTabs.TabPane aria-labelledby="tab-4">
                {
                  <ClayInput
                    id="postId"
                    placeholder="ID POST"
                    type="text"
                  ></ClayInput>
                }
                {
                  <ClayButton
                    id="fetchButton"
                    onClick={() => getByIdFunction()}
                    displayType="primary"
                  >
                    GET BY ID
                  </ClayButton>
                }
              </ClayTabs.TabPane>
            </ClayTabs.Content>
          </ClayModal.Body>
          <ClayModal.Footer
            last={<ClayButton onClick={onClose}>{"CLOSE"}</ClayButton>}
          />
        </ClayModal>
      )}
      <ClayButton className="buttonDocuments" displayType="primary" onClick={() => setVisible(true)}>
        {"Blog Request's"}
      </ClayButton>
    </>
  );
};
