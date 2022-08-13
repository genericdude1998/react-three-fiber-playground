/* eslint-disable max-len */
import React from 'react';
import { Button, styled } from '@mui/material';

const geometries = [
  'plane',
  'cube',
  'sphere',
  'torus',
  'knot',
  'tube',
];

export default function GeometryPicker({ changeGeometry }) {
  return (
    <GeometryPickerColumn>
      {geometries.map((_, index) => (
        !(index % 3)
          && (
            <GeometryPickerRow id={index}>
              {geometries.map((geometry, index2) => index2 >= index && index2 < index + 3
              && (
              <GeometryPickerOption
                id={geometry}
                onClick={() => changeGeometry(index2)}
              >
                {geometry}
              </GeometryPickerOption>
              ))}
            </GeometryPickerRow>
          )

      ))}

    </GeometryPickerColumn>
  );
}

const GeometryPickerColumn = styled('div')`
    display: flex;
    flex-direction: column;
`;

const GeometryPickerRow = styled('div')`
    display: flex;
    margin: 1px 5px;
`;

const GeometryPickerOption = styled(Button)`
    height: 50px;
    width: 50px;
    padding: 3px;
    :hover {
      border: 1px solid white;
    }
`;
