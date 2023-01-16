import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';

export default function CustomSeparator({page}) {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" to="../" >
      Home
    </Link>,
    <Typography key="1">
      { page?.nome_carro || page}
    </Typography>,
  ];

  return (
    <Stack spacing={2}>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}