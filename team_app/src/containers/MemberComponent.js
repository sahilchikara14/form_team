import React, { useEffect } from 'react'
import { useSelector } from "react-redux";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';

const MemberComponent = () => {

    const members = useSelector((state) => state.allMembers.members);
    const renderList = members.map((member) => {
        const { id, first_name, last_name, email, gender, avatar, domain, available } = member;
        return (


            <Card sx={{ maxWidth: 345 }} key={id}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="100"
                        image={avatar}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {first_name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                           
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>



        )
    })


    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={3} md={2.4}>

                    {renderList}
                </Grid>
            </Grid>
        </>
    )
}

export default MemberComponent