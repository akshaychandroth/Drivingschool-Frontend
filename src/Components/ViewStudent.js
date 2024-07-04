import React from 'react'
import '../CSS/ViewStudent.css'

function ViewStudent() {
  return (
    <div>

<form class="form mt-5">
        <p class="title">View </p>

        <label>
          <input class="input" type="text" placeholder="" required="" />
          <span>Name</span>
        </label>

        <label>
          <input class="input" type="textarea" placeholder="" required="" />
          <span>Address</span>
        </label>

        <label>
          <input class="input" type="text" placeholder="" required="" />
          <span>Phone Number</span>
        </label>

        <label>
          <input class="input" type="email" placeholder="" required="" />
          <span>Email</span>
        </label>

        <label>
          <select class="input">
          <option selected disabled class="input" >
              Select the Type
            </option>
            <option class="input" value="student">
              Student
            </option>
            <option class="input" value="remotestudent">
              Remote Student
            </option>
          </select>
          <span>Type</span>
        </label>

        <label>
          <input class="input" type="text" placeholder="" required="" />
          <span>Username</span>
        </label>

        <label>
          <input class="input" type="password" placeholder="" required="" />
          <span>Password</span>
        </label>
  
        <button class="submit">Back</button>
      </form>

    </div>
  )
}

export default ViewStudent