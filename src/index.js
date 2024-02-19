import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { createClient } from '@supabase/supabase-js';
import  MyContextProvider from './MyContext';

const supabase = createClient("https://maxhdvpphynarkivgxkd.supabase.co" ,"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1heGhkdnBwaHluYXJraXZneGtkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgzNTgwNDIsImV4cCI6MjAyMzkzNDA0Mn0.16eZqT4oMuCh6WayFk-Fflucfe3cc3uQ9prr3LOIC94" )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  // Wrap App with MyContextProvider //
      <SessionContextProvider supabaseClient = {supabase}>
        <MyContextProvider>
        <App />
        </MyContextProvider>
      </SessionContextProvider>

);

