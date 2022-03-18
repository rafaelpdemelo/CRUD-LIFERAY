import React from 'react';

import ClayForm, {ClayInput} from '@clayui/form';
import ClayButton from '@clayui/button';



export const DocumentAndMediaComponent = () => {
    return (
        <>
    <h1>Documents and Media - POST</h1>
      <ClayForm.Group>
        <ClayInput.Group>
          <input type="file" id="file-selector" name="img">
          </input>
          <ClayInput.GroupItem append shrink>
            <ClayButton displayType="secondary" type="submit">
              Submit
            </ClayButton>
          </ClayInput.GroupItem>
        </ClayInput.Group>
      </ClayForm.Group>
      </>
    );
  };
  
