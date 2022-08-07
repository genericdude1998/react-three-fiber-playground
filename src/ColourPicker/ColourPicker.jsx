/* eslint-disable max-len */
import React from 'react';
import { styled } from '@mui/material';

const colours = [
  '#FF0000',
  '#00FF00',
  '#0000FF',
  '#FFFF00',
  '#FFFFFF',
  '#000000',
  '#FF00FF',
  '#00FFFF',
  '#493001',
  '#CC8500',
];

export default function ColourPicker({ changeDirLightColour, directionalLightColour }) {
  return (
    <ColourPickerColumn>
      {colours.map((_, index) => (
        !(index % 5)
          && (
            <ColourPickerRow id={index}>
              {colours.map((colour, index2) => index2 >= index && index2 < index + 5
              && (
              <ColourPickerColourSquare
                style={
                  { backgroundColor: colour, border: directionalLightColour === colour && '3px solid magenta' }
                }
                id={colour}
                onClick={changeDirLightColour(colour)}
              />
              ))}
            </ColourPickerRow>
          )

      ))}

    </ColourPickerColumn>
  );
}

const ColourPickerColumn = styled('div')`
    display: flex;
    flex-direction: column;
`;

const ColourPickerRow = styled('div')`
    display: flex;
    margin: 1px 5px;
`;

const ColourPickerColourSquare = styled('div')`
    height: 50px;
    width: 50px;
    padding: 3px;
    :hover {
      border: 1px solid white;
    }
`;
