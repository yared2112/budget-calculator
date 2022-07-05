import React from 'react'
import {MdSend} from "react-icons/md"

const ExpenseForm = () => {
  return (
    <form>
        <div className='form-center'>
            <div className='form-group'>
                <label htmlFor="expense">charge</label>
                <input
                    type="text"
                    className="form-control"
                    id="charge"
                    name="charge"
                    placeholder="e.g. rent"
                    //value={charge}
                    //onChange={handleCharge}
                />
            </div>
        
        </div>
    </form>
  )
}

export default ExpenseForm