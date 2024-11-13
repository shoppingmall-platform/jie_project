import React from 'react'
import { TableCell, TableRow , RadioGroup, FormControlLabel, Radio, } from '@mui/material'

const initialData = [
  { id: 1, name: '색상', values: ['블랙', '화이트'], description: '상품의 색상을 선택합니다.' },
  { id: 2, name: '사이즈', values: ['S', 'M', 'L'], description: '상품의 사이즈를 선택합니다.' },
];

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
                <FormControlLabel value="optionset" control={<Radio />} label="옵션세트" />
                <FormControlLabel value="option" control={<Radio />} label="옵션" />
                <FormControlLabel value="oo" control={<Radio />} label="직접 입력" />
            </RadioGroup>
        </TableCell>
    </TableRow>
  )
}

export default OptionSettings