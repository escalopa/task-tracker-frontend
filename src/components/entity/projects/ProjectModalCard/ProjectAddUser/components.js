import makeStyles from '@material-ui/styles/makeStyles'

export const useStyle = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  form: {
    padding: '10px',
    marginTop: '40px',
    display: 'flex',
    flexDirection: 'column'
  },

  users: {
    marginTop: '-50px',
    marginRight: '20px',
    display: 'flex',
    flexDirection: 'column',
    minWidth: '200px',
    maxHeight: '200px',
    border: '2px solid #6b6867',
    borderRadius: '10px',
    padding: '20px',
    'overflow-y': 'auto',
    '&::-webkit-scrollbar-thumb': {
      height: '10px',
      width: '10px',
      borderRadius: '10px',
      background: 'gray'
    },
    '&::-webkit-scrollbar': {
      height: '10px',
      width: '10px',
      borderRadius: '10px',
      backgroundColor: '#1a1c1e'
    }
  },

  email: {
    fontWeight: 'bold',
    color: 'white',
    paddingBottom: '10px'
  }
}))