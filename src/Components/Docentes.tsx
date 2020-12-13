import React, { ReactElement } from 'react'
import DocentesTabs from './DocentesTabs'

export default function Docentes(): ReactElement {
  return <DocentesTabs />
}

// import Paper from '@material-ui/core/Paper'
// import Grid from '@material-ui/core/Grid'
// import TextField from '@material-ui/core/TextField'
// import { makeStyles } from '@material-ui/core/styles'
// import Autocomplete, {
//   createFilterOptions,
// } from '@material-ui/lab/Autocomplete'

// const useStyles = makeStyles(theme => ({
//   layout: {
//     width: 'auto',
//     marginLeft: theme.spacing(2),
//     marginRight: theme.spacing(2),
//     [theme.breakpoints.up(800 + theme.spacing(2) * 2)]: {
//       maxWidth: 800,
//       marginLeft: 'auto',
//       marginRight: 'auto',
//     },
//   },
//   paper: {
//     marginTop: theme.spacing(12),
//     marginBottom: theme.spacing(6),
//     padding: theme.spacing(3),

//     // [theme.breakpoints.up(800 + theme.spacing(3) * 2)]: {
//     //   marginTop: theme.spacing(12),
//     //   marginBottom: theme.spacing(6),
//     //   padding: theme.spacing(3),
//     // },
//   },
// }))
// const cargosList = [
//   { title: 'Professor Assistente' },
//   { title: 'Professor Assistente Doutor' },
//   { title: 'Professor Associado' },
//   { title: 'Professor Titular' },
// ]

// // interface Props {
// //   //   TODO
// // }

// // function Docentes({}: Props): ReactElement {
// interface CargoType {
//   inputValue?: string
//   title: string
// }

// function Docentes(): ReactElement {
//   const classes = useStyles()
//   const filter = createFilterOptions<CargoType>()
//   return (
//     <main className={classes.layout}>
//       <Paper elevation={2} className={classes.paper}>
//         <Grid container spacing={3}>
//           <Grid item xs={6} md={6}>
//             <TextField
//               required
//               id="DataAdmissão"
//               label="Data de Admissão"
//               type="date"
//               fullWidth
//               // variant="outlined"
//               InputLabelProps={{
//                 shrink: true,
//               }}
//             />
//           </Grid>
//           <Grid item xs={6} md={6}>
//             <Autocomplete
//               id="Cargo"
//               options={cargosList}
//               freeSolo
//               forcePopupIcon
//               style={{ width: 300 }}
//               handleHomeEndKeys
//               clearOnBlur
//               selectOnFocus
//               filterOptions={(options, state) => {
//                 const filtered = filter(options, state)

//                 // Suggest the creation of a new value
//                 if (state.inputValue !== '') {
//                   filtered.push({
//                     inputValue: state.inputValue,
//                     title: `Adicionar "${state.inputValue}"`,
//                   })
//                 }

//                 return filtered
//               }}
//               // renderOption={option => option.title}
//               getOptionLabel={(option: CargoType) => {
//                 // Value selected with enter, right from the input
//                 if (typeof option === 'string') {
//                   return option
//                 }
//                 // Add "xxx" option created dynamically
//                 if (option.inputValue) {
//                   return option.inputValue
//                 }
//                 // Regular option
//                 return option.title
//               }}
//               renderOption={option => option.title}
//               renderInput={params => (
//                 <TextField
//                   {...params}
//                   InputLabelProps={{
//                     shrink: true,
//                   }}
//                   label="Cargo"
//                 />
//               )}
//             />
//           </Grid>
//           <Grid item xs={6} md={6}>
//             <TextField
//               required
//               id="cargo"
//               label="Cargo"
//               fullWidth
//               autoComplete="cc-number"
//               InputLabelProps={{
//                 shrink: true,
//               }}
//             />
//           </Grid>
//           <Grid item xs={6} md={6}>
//             <TextField
//               required
//               id="cardNumber"
//               label="Card number"
//               fullWidth
//               autoComplete="cc-number"
//             />
//           </Grid>
//         </Grid>
//       </Paper>
//     </main>
//   )
// }

// export default Docentes
