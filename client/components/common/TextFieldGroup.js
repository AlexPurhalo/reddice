import React from 'react';
import classnames from 'classnames';

const TextFieldGroup = ({ field, value, label, error, type, onChange, checkUserExists }) => {
	return (
		<div className={classnames("form-group", { 'has-error': error })}>
			<label className="control-label">{label}</label>
			<input
				value={value}
				onChange={onChange}
				type={type}
				name={field}
				onBlur={checkUserExists}
				className="form-control"/>
			{error && <span className="help-block">{error}</span>}
		</div>
	);
};

TextFieldGroup.propTypes = {
	field: React.PropTypes.string.isRequired,
	value: React.PropTypes.string.isRequired,
	label: React.PropTypes.string.isRequired,
	error: React.PropTypes.string.isRequired,
	type: React.PropTypes.string.isRequired,
	onChange: React.PropTypes.string.isRequired,
	checkUserExists: React.PropTypes.func
};

TextFieldGroup.defaultProps = {
	type: 'text'
};

export default TextFieldGroup;
