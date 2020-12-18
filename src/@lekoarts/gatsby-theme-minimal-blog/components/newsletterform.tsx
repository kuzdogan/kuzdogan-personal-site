/** @jsx jsx */
import addToMailchimp from 'gatsby-plugin-mailchimp';
import { useState } from "react";
import { Button, Input, jsx, Spinner } from "theme-ui";
import Alert from './alert';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [isValid, setValid] = useState(true);
  const [isLoading, setLoading] = useState(false);
  const [notif, setNotif] = useState({display: false, type: 'success', message: ''});

  const handleChange = (e) => {
    setValid(true);
    setEmail(e.target.value);
    e.preventDefault();
  }

  const closeAlert = () => {
    console.log('closing')
    setNotif({...notif, display: false,})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = validateEmail(email)
    setValid(isValid)
    if (isValid) {
      setLoading(true);
      addToMailchimp(email)
        .then(data => {
          console.log(data)
          if (data.result === 'success') {
            setNotif({
              display: true,
              type: data.result,
              message: "Successfully added!"
            })
          } else {
            setNotif({  
              display: true,
              type: data.result,
              message: "Something went wrong!"
            })
          }
          setLoading(false);
        })
    }
  }
  
  // from https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  
  const submitButton = 
      <Button
        type="submit"
        sx={{
          mt:[`4px`, 0],
          width:[ `100%`, `100px`],
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
        onClick={handleSubmit}
      > 
        Submit 
      </Button>
  
  const spinner = 
    <div sx={{width:`100px`, variant: `flexCenter`}}>
      <Spinner 
        sx={{py: `8px`}}
      />
    </div>

  return (
    <div
      sx={{
        width:[ '100%', '300px', '400px' ],
        margin: `auto`
      }}
    >
      <Alert 
        display={notif.display}
        message={notif.message}
        type={notif.type}
        onClose={closeAlert}
      />
      <form 
        sx={{ 
          flexDirection: [ "column", "row"],
          variant: `flexCenter`,
          animation: isValid ? null : `shake 0.2s ease-in-out 0s 2`,
        }}
        css='@keyframes shake {
          0% { margin-left: 0rem; }
          25% { margin-left: 0.5rem; margin-right: -0.5rem }
          75% { margin-left: -0.5rem; margin-right: 0.5rem }
          100% { margin-left: 0rem; }
        }'
        >
        
        <Input 
          sx={{ 

            mr: [0, '4px'],
            boxShadow: isValid ? null : `0 0 0.5em red`,
            ":focus": {
              outline: isValid ? null : 'red'
            },
          }}
          name='newsletterEmail'
          placeholder="Enter your email"
          value={email}
          onChange={handleChange}
        />
        { isLoading ? spinner : submitButton}
      </form>
    </div>
  )
}

export default NewsletterForm;