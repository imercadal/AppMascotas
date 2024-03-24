import React from 'react';
import { 
    AppBar, 
    Container, 
    Toolbar, 
    Typography, 
    Button 
} from "@mui/material";


const Navbar = (props) => {
    
    return (
    <AppBar position="static" sx={{ backgroundColor: "#006b81" }}>
        <Container>
            <Toolbar>
                <Typography variant="h5" component="div" sx={{ flexGrow: 1, fontWeight: "500",color: "whitesmoke" }}>
                    App Mascotas
                </Typography>
                <Typography variant="body2" component="div" sx={{ flexGrow: 1, color: "whitesmoke", fontStyle: "italic" }}>
                    {props.subTitle}
                </Typography>
                <div className="buttonHeader">
                    <Button onClick={props.onclick}>
                        {props.linkName}    
                    </Button>
                </div>
            </Toolbar>
        </Container>
    </AppBar>
    )
}
export default Navbar