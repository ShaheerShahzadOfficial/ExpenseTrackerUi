import logo from './Images/Dollar.png';
import './App.css';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Button } from '@mui/material';
function App() {
  return (
    <div className="App">
      <div style={{ width: "40%", margin: "auto" }} className="mainDiv">
        <img src={logo} alt="Dollar" height={"200px"} />
        <h1 style={{ textAlign: "center", color: "#671917" }}>Add Expense</h1>
        <div style={{ borderBottom: "5px solid black", margin: "auto", width: "80%" }}></div>
        <br />
        <br />
        <h2 style={{ textAlign: "center", color: "#fff", fontWeight: 900 }}>New Transaction</h2>
        <br />
        <div style={{ borderBottom: "5px solid black", margin: "auto", width: "80%" }}></div>
        <br />
        <div>
          <h2>Enter Amount : </h2>
          <br />
          <input type="number" placeholder='Enter Expenses' />
        </div>
        <br />
        <div style={{ borderBottom: "5px solid black", margin: "auto", width: "80%" }}></div>
        <br />
        <select className='select'>
          <option value="">Choose File Type</option>
          <option value="CSV">CSV file</option>
          <option value="other">Other file</option>
        </select>
        <br />
        <br />

        <Button variant="contained" color='error' startIcon={<CloudUploadIcon />} sx={{
          padding: "1vmax",
          borderRadius: "30px",
          cursor: "pointer",
          width: "10vmax"
        }}>
          Upload Image
        </Button>

        <br /><br />
        <div style={{ borderBottom: "5px solid black", margin: "auto", width: "80%" }}></div>
        <br />
        <div>
          <button className='AddTransaction' type="submit">Add Transaction</button>
        </div>
        <br />
      </div>
    </div>
  );
}

export default App;
