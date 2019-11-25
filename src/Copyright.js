import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link to='/' color="inherit">
                Sheldon's Blog
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default Copyright; 