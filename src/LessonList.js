import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';


const LessonList = ({lessons}) => {
    return ( 
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <nav aria-label="main mailbox folders">
                <List>
                    <ListItem lesson-head>
                        <ListItemButton>
                            <ListItemText primary='课程名称'/>
                            <ListItemText secondary='绩点' align='right'/>
                        </ListItemButton>
                    </ListItem>
                    <Divider />
                    {lessons.map((lesson) => (
                        <div className="lesson" key={lesson.name}>
                            <ListItem lesson>
                                <ListItemButton>
                                    <ListItemText primary={lesson.name} />
                                    <ListItemText secondary={lesson.credit} align='right' />
                                </ListItemButton>
                            </ListItem>
                        </div>
                    ))}
                </List>
            </nav>
        </Box>
    );
}
 
export default LessonList;