import { useState } from "react";
import ReactDOM from "react-dom/client";

import './LaunchForm.css'

const LaunchForm = () => {
    const [inputs, setInputs] = useState({});



    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
    }
    const totalPrize = () => {
        const months = document.getElementById("month").value;
        const amount = document.getElementById("amount").value;
        var totalPrize = months + amount;
        console.log(months);
        console.log(amount);
        console.log(totalPrize);
        return totalPrize;


    }

    return (
        // <form onSubmit={handleSubmit}>
            <div className="forms">

                <select className="minimal" value={inputs.Chitty} onChange={handleChange}>
                    <option name="Category" value="">Chitty Category</option>
                    <option name="Chitty" value="Festival Chitty">Festival Chitty</option>
                    <option name="Chitty" value="Single-Divisional Chitty">Single-Divisional Chitty</option>
                    <option name="Chitty" value="Multi-Divisional Chitty">Multi-Divisional Chitty</option>
                </select><br /><br />



                <select className="minimal" value={inputs.employee} onChange={handleChange}>
                    <option name="Select Employee" value="">Employee</option>
                    <option name="employee" value="Employee 1">Employee 1</option>
                    <option name="employee" value="Employee 2">Employee 2</option>
                </select><br /><br />


                <select id="month" className="minimal" onChange={handleChange}>
                    <option name="Select Months" value="">Installment</option>
                    <option name="100" value="100">100 Months</option>
                    <option name="50" value="50">50 Months</option>
                    <option name="40" value="40">40 Months</option>
                    <option name="30" value="30">30 Months</option>

                </select><br /><br />



                <select id="amount" className="minimal" value={inputs.employee} onChange={handleChange}>
                    <option name="Select Amount" value="">Amount</option>
                    <option name="10000" value="10000">10000</option>
                    <option name="5000" value="5000">5000</option>
                    <option name="4000" value="4000">4000</option>
                    <option name="2500" value="2500">2500</option>

                </select><br /><br />



                <input

                    name="total"
                    value={totalPrize}
                    placeholder="Total Prize"

                />



                <button type="submit">
                    Launch
                </button>
            </div>




        // </form>


    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<LaunchForm />);

export default LaunchForm;
