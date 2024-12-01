# Dynamic Table Generator

## 1. Task Description

The task is to create a **Dynamic Table Generator** where users can input an array of objects (in JSON format), and upon submission, the data is displayed in a table format. The application allows users to enter data into a text area, and once the **"Generate Table"** button is clicked, it parses the input JSON and dynamically generates a table with columns and rows based on the provided data. The table layout is responsive and adjusts for different screen sizes, ensuring a user-friendly experience across devices.

---

## 2. Task Output Screenshot


![Task Output Screenshot 1](./1.img)
![Task Output Screenshot 2](./2.img)
![Task Output Screenshot 3](./3.img)


---

## 3. Widget/Algorithm Used In Task

- **Textarea Widget**:  
  Used to input an array of objects in JSON format. The user enters the data as JSON, which is then parsed to display in a table format.

- **Button Widget**:  
  Triggers the function that generates the table based on the user input. The button reads the JSON input and dynamically creates a table with the relevant data.

- **Table**:  
  A dynamic table is generated based on the array input by the user. The table displays column headers and rows that correspond to the keys and values in the input data.

- **State Management (React useState)**:  
  Used to manage the state of the user input (`input`) and the parsed data (`data`). This allows the dynamic updating of the table when new input is provided.

- **JSON Parsing**:  
  The input text is parsed from JSON format into a JavaScript array of objects using `JSON.parse()`. This step ensures that the input data can be converted into usable data for the table.

- **CSS Flexbox and Grid**:  
  These CSS techniques are used to create a responsive layout and style the elements. The table adjusts to different screen sizes and maintains an organized structure on mobile, tablet, and desktop devices.

---
