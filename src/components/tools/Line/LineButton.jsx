/** External Dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { Line } from '@scaleflex/icons';

/** Internal Dependencies */
import ToolsBarItemButton from 'components/ToolsBar/ToolsBarItemButton';
import { TOOLS_IDS } from 'utils/constants';

const LineButton = ({ selectTool, isSelected }) => (
  <ToolsBarItemButton
    id={TOOLS_IDS.LINE}
    label="Line"
    Icon={Line}
    onClick={selectTool}
    isSelected={isSelected}
  />
);

LineButton.defaultProps = {
  isSelected: false,
};

LineButton.propTypes = {
  selectTool: PropTypes.func.isRequired,
  isSelected: PropTypes.bool,
};

export default LineButton;
