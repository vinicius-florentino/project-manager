import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import { createTheme } from "@mui/material/styles";
import { MuiThemeMod } from "../../css/muiTheme";

function InputForm({type, name, handleOnChange, text, required, maxLength, placeholder }){
    const theme = createTheme(MuiThemeMod);
    return(
        <>
            <InputLabel
                htmlFor={name}
                sx={{ color: theme.palette.primary.main }}>
                {text}
            </InputLabel>
            <Input
                id={name}
                name={name}
                type={type}
                aria-describedby="my-helper-text"
                onChange={handleOnChange}
                maxLength={maxLength}
                required={required}
                placeholder={placeholder} 
            />
        </>
    )
}

export default InputForm