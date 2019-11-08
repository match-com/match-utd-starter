import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  card: {
    maxWidth: '500px',
    padding: '10px'
  }
});

const TestCard = () => {
  const classes = useStyles();
  const [text, setText] = useState('default text')
  return (
    <Container maxWidth='xs'>
      <Box>
        <Card
          className={classes.card}
          raised
        >
          <Box>
            <TextField
              id="name-input"
              label="Standard"
              margin="normal"
              variant="filled"
              onChange={(e) => setText(e.target.value)}
              value={text}
            />
          </Box>
          <Box>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => alert(text)}
            >
              Click Me
            </Button>
          </Box>
        </Card>
      </Box>
    </Container>
  )
}

export default TestCard;