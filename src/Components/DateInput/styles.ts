import { calendarStyle } from './types'

const calendarStyles: calendarStyle = {
  Container: {
    position: 'absolute',
    padding: '6px',
    //top: '20px',
    backgroundColor: '#fff',
    zIndex: 1000,
    border: '1px solid rgba(34,36,38,.15)',
    borderRadius: '.28571429rem',
    marginTop: '10px',
    display: 'block',
  },
  Days: {
    padding: '15px',
    background: '#bbb',
    '&:hover': {
      background: '#000',
    },
  },
}

export const calendarCSS = `

  .cal-container {
    position: absolute;
    padding: 10px;
    //top: '20px';
    background-color: #fff;
    z-index: 1000;
    border: 1px solid rgba(34,36,38,.15);
    border-radius: .3rem;
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    width: 240px;
    box-sizing: border-box;
    user-select: none;
  }
  .cal-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25px, 1fr));
    grid-gap: 3px;
    
  }
  .cal-buttons-container {
    width: 100%;
    display: flex;
    margin-bottom: 10px;

  }
  .cal-label {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    width: 100%;
    color: #262626;
  }
  .cal-button {
    width: 30px;
    align-items: center;
    justify-content: center;
    height: 30px;
    color: #262626;
    // margin: 0 2px;
    padding: 5px;
    border: 1px solid rgba(34,36,38,.15);
    border-radius: .3rem;
  }
  .cal-button:hover {
    background-color: #ccc;
    border-radius: 10%;
    // color: #fff !important;
    font-weight: 700;
  }

  .cal-days {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 25px;
    color: #262626;
  }
  .cal-day-selected {
    background: #22f;
    color: white;
    font-weight: 600;
    border-radius: .3rem;
  }
  .cal-days-bold {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    color: #262626;
    font-weight: 600;
  }
  .cal-days-grey {
    color: #bbb;
  }
  .cal-days--current, .cal-days:hover {    
    background-color: #009688;
    border-radius: 10%;
    color: #fff !important;
    font-weight: 700;
    cursor: pointer;
  }
  // .cal-days:nth-child(5n) {
  //   color: #ff685d;
  //   font-weight: 700;
  // }
`

export default calendarStyles
