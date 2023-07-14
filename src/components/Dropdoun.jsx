import { useState } from "react";
import PropTypes from "prop-types";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import styled from "styled-components";

function Dropdoun({ setFilter }) {
  const [selectedValue, setSelectedValue] = useState("All");
  const options = ["All", "Follow", "Followings"];

  const defaultOption = selectedValue;

  const handleDropdownChange = (selectedOption) => {
    setFilter(selectedOption.value.toString());
    setSelectedValue(selectedOption.value);
  };

  const StyledDropdownWrapper = styled.div`
    width: 200px;
    height: 40px;

    .Dropdown-control {
      cursor: pointer;
      border-radius: 20px;
      background-color: #ebd8ff;
      border-color: #4b2a99;

      padding: 9px 16px;
      font-family: Montserrat;
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      text-transform: uppercase;
    }

    .Dropdown-arrow {
      margin-top: 5px;
      border-color: #4b2a99 transparent transparent;
    }

    .Dropdown-menu {
      border: 1px solid #4b2a99;
      border-radius: 20px;
      margin-top: -1px;
      font-size: 16px;
      font-weight: bold;
      background-color: #ebd8ff;
    }

    .Dropdown-option {
      padding: 10px;
      cursor: pointer;
    }

    .Dropdown-option:hover {
      background-color: #5cd3a8;
    }

    .Dropdown-placeholder {
      color: black;
    }

    .Dropdown-value {
      color: #333;
    }
  `;

  return (
    <StyledDropdownWrapper>
      <Dropdown
        options={options}
        value={defaultOption}
        onChange={handleDropdownChange}
      />
    </StyledDropdownWrapper>
  );
}

Dropdoun.propTypes = {
  setFilter: PropTypes.func.isRequired,
};

export default Dropdoun;
