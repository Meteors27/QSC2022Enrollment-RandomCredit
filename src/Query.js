import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import LessonList from './LessonList';
import BasicList from './BasicList';

export default function Query() {
    const history = useHistory();
    const [lessons, setLessons] = useState(null);

    useEffect(() => {
        fetch('http://localhost:9999/credit', {
            method: 'GET',
            credentials: 'include',
            headers:{
                'Content-Type': 'application/json;charset=utf-8',
            },
        })
            .then(res => {
                return res.json();
            })
            .then(data => {
                console.log(data);
                setLessons(data.data);
            })
    },[]);

    return(
        <div className='lesson-list'>
            {lessons && <LessonList lessons={lessons}/>}
        </div>
    );
}