import React from 'react'
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

            <Grid  item sm={3} key={id}>
                <Card >
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            image={avatar}
                            alt={first_name}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="span">
                                {first_name + " " + last_name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Email Id:{email}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Gender:{gender}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Domain: {domain}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Available: {available ? "Yes" : "No"}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        )
    })


    return (
        <>
            <Grid container spacing={4}>
                {renderList}
            </Grid>
        </>
    )
}

export default MemberComponent