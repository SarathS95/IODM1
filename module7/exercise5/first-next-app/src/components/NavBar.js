'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

function NavBar() {
    const path = usePathname();

    return(
        <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Exercise App
        </Typography>
        <Button  component={Link} href="/" className={path.startsWith('/')}> Home</Button>
        <Button component={Link}href="/login" className={path.startsWith('/login')}>Login</Button>
        <Button  component={Link} href="/bitcoinRates" className={path.startsWith('/bitcoinRates')}>Bitcoin</Button>
      </Toolbar>
    </AppBar>
    )
}
export default NavBar