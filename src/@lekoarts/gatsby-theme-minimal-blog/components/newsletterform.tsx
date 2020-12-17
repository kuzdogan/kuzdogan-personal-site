/** @jsx jsx */
import { useState } from "react";
import { Button, Input, jsx } from "theme-ui";

const NewsletterForm = () => {
  const [email, setEmail] = useState();

  const handleChange = (e) => {
    setEmail(e.target.value);
    e.preventDefault();
  }

  return (
    <form sx={{ flexDirection: [ "column", "row"], variant: `flexCenter`}}>
      <Input 
        sx={{ width:[ '100%', '300px', '400px' ], mr: [0, '4px']}}
        name='newsletterEmail'
        placeholder="Enter your email"
        value={email}
        onChange={handleChange}
      />
      
      <Button
        type="button"
        sx={{ 
          width:[ `100%`, `auto`],
          mt: [`4px`, 0],
          cursor: 'pointer',
          transition: 'all 0.1s ease-in-out',
          border: 'none',
          ":focus": {
            outline: theme => theme.colors.background,
          },
          ":active": {
            transform: `translateY(4px)`
          },
          ":hover": {
            boxShadow: theme => `0 0 15px 1px ${theme.colors.primary}`
          }
        }}
        onClick={()=>console.log(email)}
      > 
        Submit 
      </Button>
    </form>
  )
}

export default NewsletterForm;