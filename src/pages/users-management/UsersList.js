import { List, ListItem, ListItemText, Avatar } from '@material-ui/core';

const users = [
    { name: 'John Doe', avatarUrl: 'https://example.com/avatar1.png' },
    { name: 'Jane Smith', avatarUrl: 'https://example.com/avatar2.png' },
    { name: 'Bob Johnson', avatarUrl: 'https://example.com/avatar3.png' },
];

export default function UsersList() {
    return (
        <List>
            {users.map((user) => (
                <ListItem key={user.name}>
                    <Avatar src={user.avatarUrl} />
                    <ListItemText primary={user.name} />
                </ListItem>
            ))}
        </List>
    );
}
