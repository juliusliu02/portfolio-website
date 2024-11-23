'use client'

import { useEffect } from 'react';
import toast from "react-hot-toast";

function BrowserCheck() {

  useEffect(() => {
    // toast is not initialized before rendering.
    // Setting a timeout makes sure it shows up on page.
    setTimeout(() => toast.error("For better experience, please switch to a Chromium based browser."), 0)
  }, []);

  return null;
}

export default BrowserCheck;