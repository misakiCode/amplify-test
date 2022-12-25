import React from "react";
import MenuBar from "../component/MenuBar";
import { makeStyles } from "@mui/material";
import { Button } from "@mui/material";

export default function TodoList() {
    // const useStyles = makeStyles({
    //     button: {
    //         "&:hover": {
    //             background: "steelblue"
    //         },
    //         "&:active": {
    //             background: "aqua"
    //         }
    //     }
    // });
    return(
  
        <div>
            <MenuBar>
            <h1>todoリスト</h1>
            <h1>todoリスト</h1>
            <h1>todoリスト</h1>
            <Button variant="contained" >aaaa</Button>
            </MenuBar>
        </div>
    )
}
