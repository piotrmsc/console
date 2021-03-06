import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'fundamental-react';
import { PageHeader } from 'react-shared';

const ApiRuleFormHeader = ({
  handleSave,
  isValid,
  title,
  saveButtonText,
  breadcrumbItems,
}) => {
  return (
    <PageHeader
      title={title}
      breadcrumbItems={breadcrumbItems}
      actions={
        <Button
          onClick={handleSave}
          disabled={!isValid}
          option="emphasized"
          aria-label="submit-form"
        >
          {saveButtonText}
        </Button>
      }
    />
  );
};

ApiRuleFormHeader.propTypes = {
  handleSave: PropTypes.func.isRequired,
  isValid: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  saveButtonText: PropTypes.string.isRequired,
  breadcrumbItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      path: PropTypes.string,
    }),
  ),
};

export default ApiRuleFormHeader;
