import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import LessonList from './LessonList';

import Button from '@mui/material/Button';
import { Container } from '@mui/system';

export default function Query() {
    const history = useHistory();
    const [lessons, setLessons] = useState(null);
    const refresh = () => {
        fetch('http://localhost:9999/credit', {
            method: 'GET',
            credentials: 'include',
            headers:{
                'Content-Type': 'application/json;charset=utf-8',
            },
        })
            .then(res => {
                if (!res.ok) {
                    alert("登录过期，请重新登录");
                    history.go(-1);
                }
                return res.json();
            })
            .then(data => {
                console.log(data);
                setLessons(data.data);
            })
    }
    useEffect(refresh,[]);

    return(
        <div className='lesson-list'>
            <Container maxWidth='xs'>
                {lessons && <LessonList lessons={lessons}/>}
                <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={refresh}
                >
                刷新
                </Button>
            </Container>
            
        </div>
    );
}