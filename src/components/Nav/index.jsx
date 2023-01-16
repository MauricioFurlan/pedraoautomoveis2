
import { Link } from 'react-router-dom';
import styles from './index.module.css';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
export function Nav() {
    return (
        <>
        <div className={styles["nav-top"]}>
        <nav className="nav nav-pills nav-fill">
            
            <Link className="nav-item nav-link " to="/"><span className="material-icons md-36">home</span>Home</Link>
            <Link className="nav-item nav-link" to="/quemsomos"><span className="material-icons md-36">groups</span>Quem Somos</Link>
            <Link className="nav-item nav-link" to="/seminovos"><span className="material-icons md-36">directions_car</span>Seminovos</Link>
            {/* <Link className="nav-item nav-link" to="#"><span className="material-icons md-36">chat</span>Fale conosco</Link> */}
        </nav>
        </div>
        </>
     
        )
    }