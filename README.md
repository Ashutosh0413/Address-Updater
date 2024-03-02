# Address-Updater
Github Repository- https://github.com/Ashutosh0413/Address-Updater

Deployed Site- https://ashutosh0413.github.io/Address-Updater/

Address Updater allows the users to add, edit, delete address records.

The website ensures that there are no duplicate entries.

The project stores the data of the users as values in an object and we make use of these values to populate the table data which acts as the displayed information.

With the help of DOM manipulation, the data is inserted into the rows of the table.

Address Updater strengths:
1. Allows CRUD operations.
2. Checks for duplicate entries.
3. Validates the input for pincode.
4. Simple, easy to understand User Interface.

Address Updater weaknesses:
1. The project does not address potential conflicts during concurrent updates.
2. The UI is not fully responsive across different screen sizes.
3. Limited mechanisms to recover from invalid inputs or unexpected errors.

Recommendations:
1. Develop a mechanism to manage conflicts when multiple users are editing simultaneously.
2. Enhance the project's responsiveness for a seamless user experience on various devices.
3. Integrate a database and add server side functionalities to scale the usability of the application.