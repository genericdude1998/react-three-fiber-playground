/* eslint-disable max-len */
import React from 'react';
import { styled } from '@mui/material';

const colours = [
  '#FF0000',
  '#00FF00',
  '#0000FF',
  '#FFFF00',
  '#FFFFF',
  '#000000',
  '#FF00FF',
  '#00FFFF',
  '#493001',
  '#CC8500',
];

export default function ColourPicker() {
  return (
    <ColourPickerColumn>
      {colours.map((_, index) => (
        !(index % 5)
          && (
            index === 0 ? (
              <ColourPickerRow style={{ marginTop: '5px' }}>
                {colours.map((colour, index2) => index2 < 5 && <ColourPickerColourSquare style={{ backgroundColor: colour }} />)}
              </ColourPickerRow>
            )
              : (
                <ColourPickerRow>
                  {colours.map((colour, index2) => index2 >= index && index2 < index + 5 && <ColourPickerColourSquare style={{ backgroundColor: colour }} />)}
                </ColourPickerRow>
              )
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
    margin: 0 5px;
`;

const ColourPickerColourSquare = styled('div')`
    height: 50px;
    width: 50px;
    padding: 3px;
`;
