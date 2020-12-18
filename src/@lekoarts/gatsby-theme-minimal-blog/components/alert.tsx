/** @jsx jsx */
import { Alert, Close, jsx } from 'theme-ui';

const CustomAlert = ({type, message, display, onClose}) => {

  if (!display)
    return null;
  return(
    <Alert variant={type} sx={{my: '4px'}}>
      {message}
      <Close
        onClick={onClose}
        ml='auto'
        mr={-2} 
        sx={{
          width:`auto`,
          height:`auto`,
          ":hover": {
            cursor: `pointer`
          }
        }}
      />
    </Alert>
  )
} 

export default CustomAlert;