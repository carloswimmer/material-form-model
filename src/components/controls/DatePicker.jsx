import React, { useCallback } from "react";
import DateFnsUtils from "@date-io/date-fns";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";

const DatePicker = (props) => {
  const { name, label, value, onChange } = props;

  const convertDateToValue = useCallback((name, value) => {
    const convertedDate = {
      target: {
        name,
        value,
      },
    };
    return convertedDate;
  }, []);

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        label={label}
        name={name}
        inputVariant="outlined"
        format="dd/MM/yyyy"
        value={value}
        onChange={(date) => onChange(convertDateToValue(name, date))}
        KeyboardButtonProps={{
          "aria-label": "change date",
        }}
      />
    </MuiPickersUtilsProvider>
  );
};

export default DatePicker;