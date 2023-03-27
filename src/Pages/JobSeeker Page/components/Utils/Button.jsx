import React from 'react'
import { Button } from "@mui/material";

const Buttons = (props) => {
    const {variant,content,buttonType} =props
  return (

    <Button
              variant={variant}
              sx={{
                backgroundColor: "#E90064",
                color:'white',
                "&:hover": {
                  backgroundColor: "#B3005E",
                },
              }}
              disabled={buttonType}
             
            >
                {content}
            </Button>
  )
}

export default Buttons