let students = []; // Array to store students

function addStudent() {
    const name = $('#studentName').val().trim();
    const id = $('#studentId').val().trim();

    if (name !== '' && id !== '') {
        const newStudent = { name: name, id: id };
        students.push(newStudent);
        displayStudents();
        $('#studentName').val('');
        $('#studentId').val('');
        alert('Student added successfully!');
    } else {
        alert('Please enter both student name and ID!');
    }
}

function displayStudents() {
    const studentList = $('#studentList');
    studentList.empty();

    students.forEach(student => {
        const studentDiv = $('<div>').addClass('student mt-2 p-2 border');
        studentDiv.html(`
            <p><strong>Name:</strong> ${student.name}</p>
            <p><strong>ID:</strong> ${student.id}</p>
            <button class="btn btn-primary mr-2" onclick="editStudent('${student.id}')">Edit</button>
            <button class="btn btn-danger" onclick="deleteStudent('${student.id}')">Delete</button>
        `);
        studentList.append(studentDiv);
    });
}

function editStudent(id) {
    const index = students.findIndex(student => student.id === id);
    if (index !== -1) {
        const newName = prompt('Enter new name:');
        const newId = prompt('Enter new ID:');
        if (newName !== null && newId !== null) {
            students[index].name = newName.trim();
            students[index].id = newId.trim();
            displayStudents();
            alert('Student updated successfully!');
        }
    }
}

function deleteStudent(id) {
    const index = students.findIndex(student => student.id === id);
    if (index !== -1) {
        students.splice(index, 1);
        displayStudents();
        alert('Student deleted successfully!');
    }
}