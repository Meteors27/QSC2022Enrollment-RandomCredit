import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';

const LessonList = ({lessons}) => {
    return ( 
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <nav aria-label="main mailbox folders">
            <List>
                {lessons.map((lesson) => (
                    <div className="lesson" key={lesson.name}>
                        <ListItem disablePadding>
                            <ListItemButton>
                            <ListItemText primary={lesson.name} />
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