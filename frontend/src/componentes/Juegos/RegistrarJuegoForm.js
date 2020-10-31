import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, InputLabel, ListSubheader, MenuItem, Select } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: '80%',
    },
}));

function RegistrarJuegoForm(props) {
    const classes = useStyles();
    return (
        <form>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="grouped-select">Grouping</InputLabel>
                <Select defaultValue="" id="grouped-select">
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <ListSubheader>Category 1</ListSubheader>
                    <MenuItem value={1}>Option 1</MenuItem>
                    <MenuItem value={2}>Option 2</MenuItem>
                    <ListSubheader>Category 2</ListSubheader>
                    <MenuItem value={3}>Option 3</MenuItem>
                    <MenuItem value={4}>Option 4</MenuItem>
                </Select>
            </FormControl>
        </form>
    )
}

export default RegistrarJuegoForm
