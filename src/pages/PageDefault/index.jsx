import React from 'react';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Nav } from "../../components/Nav";

export function PageDefault ({ children }) {
  return (
    <>
      <Header/>
      <Nav/>
      {children}
      <Footer/>
    </>
  );
};

