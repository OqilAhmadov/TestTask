import * as React from 'react';
import axios from 'axios';
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function NewsCard() {
    const [data, setData] = React.useState([]);
    const [pagination, setpagination] = React.useState(1);
    const login = () => {
        axios.get(`https://gorest.co.in/public/v1/posts?page=${pagination}`)
            .then((res: any) => {
              setData(res.data.data.slice(1, 5));
            }).catch((error: string) => {
                console.log("error", error);
            });
    }
    React.useEffect(() => {
        login();
    },[pagination]);
    const handleChange = (event: any) => {
      setpagination(event);
        login();
    }

  return (
    <>
      <div style={{ display: 'flex',justifyContent: 'center', height: '100%' }} className='wrapper'>
        {data.map((item: any) => (

          <Card key={item.id} sx={{ maxWidth: 260, m: 4 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="220"
                image="/images/cat.jpg"
                alt="green iguana" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.title}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

        ))}
      </div>
    <Stack spacing={6} ml={6}>
        <Pagination
          onChange={(event: any) => handleChange(event.target.textContent)}
          count={10} color="primary" />
      </Stack>
      </>
   
  );
}