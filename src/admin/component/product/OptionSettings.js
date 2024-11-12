import React from 'react'
import { TableCell, TableRow , RadioGroup, FormControlLabel, Radio, } from '@mui/material'

const OptionSettings = () => {
  return (
    <TableRow>
        <TableCell align='center' colSpan={1}>옵션 구성 방식</TableCell>
        <TableCell colSpan={3}>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="display2"
                name="radio-buttons-group"
                sx={{ display:'flex', flexDirection:'row'}}
                
            >
                <FormControlLabel value="" control={<Radio />} label="옵션세트" />
                <FormControlLabel value="" control={<Radio />} label="옵션" />
                <FormControlLabel value="" control={<Radio />} label="직접 입력" />
            </RadioGroup>
        </TableCell>
    </TableRow>
  )
}

export default OptionSettings