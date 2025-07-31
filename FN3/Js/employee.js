document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("employeeForm");
  const message = document.getElementById("responseMessage");
  const tableBody = document.querySelector("#employeeTable tbody");

  let editingEmployee = null;
  //
  // function loadEmployees() {
  //   fetch()
  //     .then(res => res.json())
  //     .then(employees => {
  //       tableBody.innerHTML = "";
  //       employees.forEach(addEmployeeToTable);
  //     })
  //     .catch(err => {
  //       console.error(err);
  //       message.textContent = "Failed to load employees.";
  //       message.className = "message error";
  //     });
  // }
  //
  // function addEmployeeToTable(emp) {
  //   const row = document.createElement("tr");
  //
  //   row.innerHTML = `
  //     <td>${emp.name}</td>
  //     <td>${emp.email}</td>
  //     <td>${emp.designation}</td>
  //     <td>${parseFloat(emp.salary).toFixed(2)}</td>
  //     <td>
  //       <button class="edit-btn">Edit</button>
  //       <button class="delete-btn">Delete</button>
  //     </td>
  //   `;
  //
  //   row.querySelector(".edit-btn").addEventListener("click", () => {
  //     document.getElementById("name").value = emp.name;
  //     document.getElementById("email").value = emp.email;
  //     document.getElementById("designation").value = emp.designation;
  //     document.getElementById("salary").value = emp.salary;
  //     editingEmployee = emp.email; // use email as unique ID
  //   });
  //
  //   row.querySelector(".delete-btn").addEventListener("click", () => {
  //     if (confirm("Are you sure you want to delete this employee?")) {
  //       fetch(``, {
  //         method: "DELETE",
  //       })
  //         .then(res => {
  //           if (!res.ok) throw new Error("Failed to delete employee");
  //           loadEmployees();
  //         })
  //         .catch(err => {
  //           console.error(err);
  //           message.textContent = "Error deleting employee.";
  //           message.className = "message error";
  //         });
  //     }
  //   });
  //
  //   tableBody.appendChild(row);
  // }
  //
  // form.addEventListener("submit", function (e) {
  //   e.preventDefault();
  //
  //   const name = document.getElementById("name").value.trim();
  //   const email = document.getElementById("email").value.trim();
  //   const designation = document.getElementById("designation").value.trim();
  //   const salary = parseFloat(document.getElementById("salary").value);
  //
  //   if (!name || !email || !designation || isNaN(salary)) {
  //     message.textContent = "Please fill out all fields correctly.";
  //     message.className = "message error";
  //     return;
  //   }
  //
  //   const employee = { name, email, designation, salary };
  //
  //   const method = editingEmployee ? "PUT" : "POST";
  //
  //   fetch("http://localhost:8080/EMS_Web_exploded/employee", {
  //     method,
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(employee),
  //   })
  //     .then((res) => {
  //       if (!res.ok) throw new Error("Failed to save employee");
  //       return res.json().catch(() => ({}));
  //     })
  //     .then(() => {
  //       message.textContent = editingEmployee
  //         ? "Employee updated successfully."
  //         : "Employee added successfully.";
  //       message.className = "message success";
  //       editingEmployee = null;
  //       form.reset();
  //       loadEmployees();
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //       message.textContent = "Error saving employee.";
  //       message.className = "message error";
  //     });
  // });
  //
  // loadEmployees();
});
